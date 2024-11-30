import { moneyFormat, cn } from '@/lib/utils';
import {
  useMotionValue,
  motion,
  useTransform,
  type AnimationPlaybackControls as AnimationControls,
  useAnimate,
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
  const [scope, animate] = useAnimate();
  const count = useMotionValue(start);

  const displayValue = useTransform(count, (latest) =>
    isMoney ? moneyFormat(latest) : Math.round(latest).toString(),
  );

  useEffect(() => {
    const controls = animate(count, end, { duration, autoplay: false });
    setControls(controls);
    return () => controls.pause();
  }, []);

  if (controls == undefined) {
    return null;
  }

  return (
    <div className='flex flex-col gap-y-8'>
      <motion.span className={cn(className)} ref={scope}>
        {displayValue}
      </motion.span>
      <AnimationPlaybackControls controls={controls} />
    </div>
  );
};

export { Counter };
