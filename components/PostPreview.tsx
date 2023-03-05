import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

/****************************************
 * - PostPreview.tsx -
 ***************************************/
export default function PostPreview({ slug, title, date, preview }: Post) {
  return (
    <Link
      href={`/blog/${slug}`}
      className='rounded-md border border-outline bg-card p-4 shadow-card transition-all hover:scale-[101%] hover:border-accent'>
      <div className='mb-2 text-sm text-accent'>
        {dayjs.utc(date).format('MMM. D, YYYY')}
      </div>
      <h2 className='mb-2 font-serif text-2xl font-medium'>{title}</h2>
      <p className='text-text-sub'>{preview}</p>
    </Link>
  );
}
