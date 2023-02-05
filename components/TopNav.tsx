'use client';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const pages = [
  { text: 'Home', route: '/' },
  { text: 'Work', route: '/work' },
  { text: 'Blog', route: '/blog' },
  { text: 'Snippets', route: '/snippets' },
];

const links: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const overlay: Variants = {
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  },
  closed: {
    y: '-100%',
    transition: {
      duration: 0.5,
    },
  },
};

/****************************************
 * - TopNav.tsx -
 ***************************************/
export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    document.body.style.overflow = isOpen ? 'unset' : ' hidden';
    setIsOpen(!isOpen);
  };

  // Render.
  return (
    <nav>
      <div className='sticky z-20 flex justify-between items-center px-10 py-5'>
        <div className='flex gap-10 items-center'>
          <Link href='/' className='text-2xl'>
            IRWIN
          </Link>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={menuHandler}
          className='relative flex flex-col gap-1 min-w-[64px] min-h-[64px] items-center justify-center rounded-full bg-slate-200'>
          <div
            className={`absolute bg-black w-[22px] h-[2px] rounded transition-all ease-out duration-500 ${
              isOpen ? 'translate-y-0 rotate-[135deg]' : 'translate-y-[-3px]'
            }`}
          />
          <div
            className={`absolute bg-black w-[22px] h-[2px] rounded transition-all ease-out duration-500 ${
              isOpen ? 'translate-y-0 rotate-[225deg]' : 'translate-y-[3px]'
            }`}
          />
        </motion.button>
      </div>
      <motion.div
        className='fixed z-10 top-0 flex flex-col gap-10 text-2xl items-center justify-center bg-pink-300 h-screen w-full'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={overlay}>
        {pages.map(page => (
          <motion.div key={page.text} variants={links}>
            <Link href={page.route} onClick={menuHandler}>
              {page.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
}
