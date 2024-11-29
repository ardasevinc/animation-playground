import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

import { motion } from 'motion/react';

type GoBackProps = {
  variant?: 'animate-fade-in-from-bottom' | 'default';
};

const GoBack = ({ variant = 'default' }: GoBackProps) => {
  if (variant === 'animate-fade-in-from-bottom') {
    return (
      <Button asChild>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
          }}
        >
          <Link to='..'>
            Go <span className='underline font-semibold'>BACK</span>
          </Link>
        </motion.div>
      </Button>
    );
  }

  return (
    <Button asChild>
      <Link to='..'>
        Go <span className='underline font-semibold'>BACK</span>
      </Link>
    </Button>
  );
};

export { GoBack };
