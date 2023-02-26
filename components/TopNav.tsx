'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
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
      className='sticky top-10 z-50 mx-auto mb-20 w-min rounded-full border border-accent bg-card p-2 shadow-card sm:mb-24'>
      <ul className='flex sm:gap-5'>
        {pages.map(page => (
          <li key={page.text} className='relative'>
            <Link
              href={page.route}
              className={clsx(
                'relative z-20 block rounded-full py-3 px-6 transition-colors',
                path === page.route
                  ? 'bg-accent hover:bg-accent'
                  : 'hover:bg-[#333333]'
              )}>
              {page.text}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
