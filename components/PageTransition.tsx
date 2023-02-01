'use client';

// Externals.
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

// Animations.
const varients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {},
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={path}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={varients}
        transition={{ delay: 0.25 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
