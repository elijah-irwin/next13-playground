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
      {allPosts.map(post => (
        <PostPreview {...post} />
      ))}
    </div>
  );
}
