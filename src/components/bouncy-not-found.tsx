import { motion } from 'motion/react';

import { Badge } from '@/components/ui/badge';

const BouncyNotFound = () => {
  return (
    <motion.section
      className='flex flex-col items-center w-full mt-4 lg:mt-16 gap-y-4'
      initial={{ y: 0 }}
      animate={{ y: -50 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        type: 'spring',
      }}
    >
      <Badge className='text-2xl'>404</Badge>
      <h2 className='font-bold text-3xl'>Not Found</h2>
    </motion.section>
  );
};

export { BouncyNotFound };
