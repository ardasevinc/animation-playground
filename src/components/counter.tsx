import { moneyFormat, cn } from '@/lib/utils';
import {
  useMotionValue,
  motion,
  animate,
  useTransform,
  type AnimationPlaybackControls as AnimationControls,
} from 'motion/react';
import { useEffect, useState } from 'react';
import { AnimationPlaybackControls } from './animation-playback-controls';

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
  const [controls, setControls] = useState<null | AnimationControls>(null);
  const count = useMotionValue(start);
  const transformed = isMoney
    ? moneyFormat(count.get())
    : useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, end, { duration });
    setControls(controls);
    return () => controls.stop();
  }, []);

  if (controls == undefined) {
    return null;
  }

  return (
    <div className='flex flex-col gap-y-8'>
      <motion.span className={cn(className)}>{transformed}</motion.span>
      <AnimationPlaybackControls controls={controls} />
    </div>
  );
};

export { Counter };
