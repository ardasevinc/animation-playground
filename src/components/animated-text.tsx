import { useMotionValue, useTransform, motion, animate } from 'motion/react';
import { BlinkingCursor } from './blinking-cursor';
import { useEffect, memo } from 'react';

type AnimatedTextProps = {
  baseText: string;
};

const AnimatedText = memo(({ baseText }: AnimatedTextProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
    });

    return () => controls.stop();
  }, []);

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <BlinkingCursor />
    </span>
  );
});

export { AnimatedText };
