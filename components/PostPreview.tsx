import Link from 'next/link';
import { PostMetaData } from '@/interfaces/Posts';

/****************************************
 * - PostPreview.tsx -
 ***************************************/
export default function PostPreview({ post }: { post: PostMetaData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='rounded-md border border-slate-200 p-5 shadow'>
      <h2 className='text-lg font-semibold'>{post.title}</h2>
      <p>{post.subtitle}</p>
      <p className='text-sm text-slate-500'>{post.date}</p>
    </Link>
  );
}
