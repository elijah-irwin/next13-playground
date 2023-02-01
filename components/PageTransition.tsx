'use client';

// Externals.
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, Variants } from 'framer-motion';

// Animations.
const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
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
        variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
