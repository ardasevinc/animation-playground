import { type AnimationPlaybackControls as AnimationControls } from 'motion/react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

import { PlayIcon, PauseIcon, SquareIcon } from 'lucide-react';
import { Slider } from './ui/slider';

type AnimationPlaybackControls = {
  controls: AnimationControls;
};

const AnimationPlaybackControls = ({ controls }: AnimationPlaybackControls) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let frameId: number;

    const updateTime = () => {
      setCurrentTime(controls.time * 1000);
      if (playing && controls.time < controls.duration) {
        frameId = requestAnimationFrame(updateTime);
      }
    };

    if (playing) {
      frameId = requestAnimationFrame(updateTime);
    }

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [controls, playing]);

  const playPause = () => {
    if (playing) {
      controls.pause();
    } else {
      controls.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className='space-y-4'>
      <Slider
        value={[currentTime]}
        min={0}
        max={controls.duration * 1000}
        step={16.67}
        onValueChange={(value) => setCurrentTime(value[0])}
        onValueCommit={(value) => {
          controls.time = value[0] / 1000;
        }}
        className='w-52'
      />
      <div
        role='group'
        aria-label='animation playback control buttons'
        className='inline-flex items-center gap-x-2'
      >
        <Button
          variant='outline'
          size='icon'
          aria-label='play/pause'
          onClick={() => playPause()}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button
          variant='outline'
          size='icon'
          aria-label='stop or reset'
          onClick={() => {
            controls.pause();
            controls.time = 0;
            setPlaying(false);
            setCurrentTime(0);
          }}
        >
          <SquareIcon />
        </Button>
      </div>
    </div>
  );
};

export { AnimationPlaybackControls };
