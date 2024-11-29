import { motion } from 'motion/react';

import { Badge } from '@/components/ui/badge';
import { GoBack } from './go-back';

const BouncyNotFound = () => {
  return (
    <div className='gap-y-12 flex flex-col items-center w-full mt-4 lg:mt-16'>
      <motion.section
        className='flex flex-col items-center gap-y-4'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: 'linear',
        }}
      >
        <Badge className='text-2xl'>404</Badge>
        <h2 className='font-bold text-3xl'>Not Found</h2>
      </motion.section>
      <GoBack variant='animate-fade-in-from-bottom' />
    </div>
  );
};

export { BouncyNotFound };
