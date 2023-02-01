'use client';
import { useState } from 'react';
import Link from 'next/link';

const pages = [
  { text: 'Home', route: '/' },
  { text: 'Work', route: '/work' },
  { text: 'Blog', route: '/blog' },
  { text: 'Snippets', route: '/snippets' },
];

/****************************************
 * - TopNav.tsx -
 ***************************************/
export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Render.
  return (
    <nav>
      <div className='sticky z-10 flex justify-between items-center px-10 py-5'>
        <div className='flex gap-10 items-center'>
          <Link href='/' className='text-2xl'>
            IRWIN
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(prev => !prev)}
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
        </button>
      </div>
      <div
        className={`fixed flex items-center justify-center bg-pink-300 -h-full h-screen w-full transition-all ease-in-out duration-500 ${
          isOpen ? 'top-0' : '-top-full'
        }`}>
        Overlay
      </div>
    </nav>
  );
}
