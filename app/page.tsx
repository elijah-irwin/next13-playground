import { getPostMetaData } from '@/lib/posts';
import PostPreview from '@/components/PostPreview';
import PageTransition from '@/components/PageTransition';

/****************************************
 * - Home Page -
 ***************************************/
export default function Home() {
  const postMetaData = getPostMetaData();

  // Render.
  return (
    <PageTransition>
      <main>
        <h1 className='mb-5 text-2xl text-blue-400'>Home</h1>
        <div className='flex flex-col gap-5'>
          {postMetaData.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
