import { type Variants, motion } from 'motion/react';

import { cn } from '@/lib/utils';

const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const BlinkingCursor = ({ className }: { className?: string }) => {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className={cn(
        'inline-block h-5 w-[1px] translate-y-1 bg-white',
        className,
      )}
    />
  );
};

export { BlinkingCursor };
