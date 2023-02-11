import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

/****************************************
 * - Blog Page -
 ***************************************/
export default function Blog({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slug === params.slug);

  if (post === undefined) {
    return (
      <div>
        <h1>Post not found! 🥲</h1>
      </div>
    );
  }

  const Content = useMDXComponent(post.body.code);

  return (
    <div>
      <h1>{post.title}</h1>
      <Content />
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts = getPostMetaData();
//   return posts.map(post => ({ slug: post.slug }));
// }
