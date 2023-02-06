'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: ReactNode }) {
  // const path = usePathname();

  return (
    // <AnimatePresence>
    <motion.div
      // key={path}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
    // </AnimatePresence>
  );
}
