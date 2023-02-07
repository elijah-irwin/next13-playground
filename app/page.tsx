import { getPostMetaData } from '@/lib/posts';
import PostPreview from '@/components/PostPreview';
import PageTransition from '@/components/PageTransition';

// Content.
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from 'contentlayer/generated';

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
        <div className='mb-5 flex flex-col gap-5'>
          {postMetaData.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
        <div className='mb-5 flex flex-col gap-5'>
          {allPosts.map(post => {
            const Component = useMDXComponent(post.body.code);
            return (
              <div key={post._id}>
                <div>{post.title}</div>
                <div>{post.date}</div>
                <Component />
              </div>
            );
          })}
        </div>
      </main>
    </PageTransition>
  );
}
