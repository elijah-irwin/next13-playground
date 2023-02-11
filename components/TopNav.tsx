'use client';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { text: 'Home', route: '/' },
  { text: 'About', route: '/about' },
  { text: 'Work', route: '/work' },
  { text: 'Blog', route: '/blog' },
];

/****************************************
 * - TopNav.tsx -
 ***************************************/
export default function TopNav() {
  const path = usePathname();

  // Render.
  return (
    <nav className='sticky top-10 z-50 m-auto mb-20 w-[400px] rounded-full border-2 border-slate-200 bg-white p-1 shadow-sm'>
      <ul className='flex justify-between'>
        {pages.map(page => (
          <li key={page.text} className='relative'>
            <Link href={page.route} className='relative z-20 block  py-3 px-5'>
              {page.text}
            </Link>
            {path === page.route && (
              <motion.div
                layoutId='background'
                className='absolute top-0 left-0 z-10 h-full w-full rounded-full bg-slate-100'
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
