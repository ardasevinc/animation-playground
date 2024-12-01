import { animate, useMotionValue, useTransform, motion } from 'motion/react';
import { useEffect, memo } from 'react';

type RewritingTextAnimationProps = {
  texts: Array<string>;
};

const RewritingTextAnimation = memo(
  ({ texts }: RewritingTextAnimationProps) => {
    const textIndex = useMotionValue(0);
    const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.get().slice(0, latest),
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
      const controls = animate(count, 60, {
        type: 'tween',
        duration: 1,
        ease: 'easeIn',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1,
        onUpdate: (latest) => {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (textIndex.get() === texts.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        },
      });

      return () => controls.stop();
    }, []);

    return <motion.span>{displayText}</motion.span>;
  },
);

export { RewritingTextAnimation };
