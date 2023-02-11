import Link from 'next/link';
import { Post } from 'contentlayer/generated';

/****************************************
 * - PostPreview.tsx -
 ***************************************/
export default function PostPreview({ slug, title, date, preview }: Post) {
  return (
    <Link
      href={`/blog/${slug}`}
      className='rounded-md border border-slate-200 p-5 shadow'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p>{preview}</p>
      <p className='text-sm text-slate-500'>{date}</p>
    </Link>
  );
}
