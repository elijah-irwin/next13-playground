'use client';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { text: 'Home', route: '/' },
  { text: 'About', route: '/about' },
  { text: 'Blog', route: '/blog' },
];

/****************************************
 * - TopNav.tsx -
 ***************************************/
export default function TopNav() {
  const path = usePathname();

  // Render.
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className='sticky top-10 z-50 mx-auto mb-14 w-min rounded-full border border-outline bg-card p-2 shadow-card'>
      <ul className='flex gap-5'>
        {pages.map(page => (
          <li key={page.text} className='relative'>
            <Link href={page.route} className='relative z-20 block py-4 px-6'>
              {page.text}
            </Link>
            {path === page.route && (
              <motion.div
                layoutId='background'
                className='absolute top-0 left-0 z-10 h-full w-full rounded-full bg-accent'
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
