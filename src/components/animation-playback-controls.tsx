import { type AnimationPlaybackControls as AnimationControls } from 'motion/react';
import { Button } from './ui/button';
import { useState } from 'react';

import { PlayIcon, PauseIcon, SquareIcon } from 'lucide-react';
import { Slider } from './ui/slider';

type AnimationPlaybackControls = {
  controls: AnimationControls;
};

const AnimationPlaybackControls = ({ controls }: AnimationPlaybackControls) => {
  const [playing, setPlaying] = useState(controls.state === 'running');
  const duration = controls.duration * 1000;
  const currentTime = controls.time ?? 0;
  const sliderMin = 0;
  const sliderMax = duration;
  const sliderStep = 16.67;

  const playPause = () => {
    playing ? controls.pause() : controls.play();
    setPlaying(!playing);
  };

  return (
    <div>
      <Slider
        value={[currentTime]}
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        onValueCommit={(value) => {
          controls.time = value[0];
        }}
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
        <Button variant='outline' size='icon' aria-label='stop or reset'>
          <SquareIcon />
        </Button>
      </div>
    </div>
  );
};

export { AnimationPlaybackControls };
