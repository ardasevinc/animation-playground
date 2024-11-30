import { moneyFormat, cn } from '@/lib/utils';
import { useMotionValue, motion, animate, useTransform } from 'motion/react';
import { useEffect } from 'react';

type CounterProps = {
  start: number;
  end: number;
  duration: number;
  isMoney?: boolean;
  className?: string;
};

const Counter = ({
  start,
  end,
  duration,
  isMoney = false,
  className,
}: CounterProps) => {
  const count = useMotionValue(start);
  const transformed = isMoney
    ? moneyFormat(count.get())
    : useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, end, { duration });
    return () => controls.stop();
  }, []);

  return <motion.span className={cn(className)}>{transformed}</motion.span>;
};

export { Counter };
