// Components.
import PostPreview from '@/components/PostPreview';

// Content.
import { allPosts } from 'contentlayer/generated';

/****************************************
 * - Blog Page -
 ***************************************/
export default function Blog() {
  return (
    <div className='mb-5 flex flex-col gap-5'>
      {allPosts
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map(post => (
          <PostPreview key={post._id} {...post} />
        ))}
    </div>
  );
}
