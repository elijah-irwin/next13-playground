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
        <h1 className='text-blue-400 text-2xl mb-5'>Home</h1>
        <div className='flex flex-col gap-5'>
          {postMetaData.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
