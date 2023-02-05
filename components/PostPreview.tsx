import Link from 'next/link';
import { PostMetaData } from '@/interfaces/Posts';

/****************************************
 * - PostPreview.tsx -
 ***************************************/
export default function PostPreview({ post }: { post: PostMetaData }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </Link>
  );
}
