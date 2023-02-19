import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-10 flex w-full justify-between border-t-[1px] border-outline py-5 px-2'>
      <div>🤔</div>
      <div className='flex gap-5'>
        <Link
          href='#'
          className='text-text-sub transition-colors hover:text-accent'>
          Github
        </Link>
        <Link
          href='#'
          className='text-text-sub transition-colors hover:text-accent'>
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
