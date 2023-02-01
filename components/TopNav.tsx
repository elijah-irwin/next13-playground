'use client';
import { useState } from 'react';
import Link from 'next/link';

/****************************************
 * - TopNav.tsx -
 ***************************************/
export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Render.
  return (
    <nav>
      <div className='sticky flex justify-between items-center z-20 px-10 py-5'>
        <div className='flex gap-10 items-center'>
          <Link href='/' className='text-2xl'>
            IRWIN
          </Link>
          <Link href='/work' className='text-lg'>
            Work
          </Link>
          <Link href='/blog' className='text-lg'>
            Blog
          </Link>
          <Link href='/snippets' className='text-lg'>
            Snippets
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className='relative flex flex-col gap-1 min-w-[64px] min-h-[64px] items-center justify-center rounded-full bg-slate-200'>
          <div
            className={`absolute translate-y-[-3px] bg-black w-[18px] h-[2px] rounded transition-all ease-out duration-500 ${
              isOpen && 'translate-y-0 rotate-[135deg]'
            }`}
          />
          <div
            className={`absolute translate-y-[3px] bg-black w-[18px] h-[2px] rounded transition-all ease-out duration-500 ${
              isOpen && '-translate-y-0 rotate-[225deg]'
            }`}
          />
        </button>
      </div>
      <div
        className={`fixed bg-pink-300 z-10 -h-full h-screen w-full transition-all ease-in-out duration-500 ${
          isOpen ? 'top-0' : '-top-full'
        }`}>
        Overlay
      </div>
    </nav>
  );
}
