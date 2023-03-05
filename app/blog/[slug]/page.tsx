import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { components } from '@/components/MDX';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

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
      <h1 className='mb-4 font-serif text-5xl'>{post.title}</h1>
      <div className='mb-12 flex items-center gap-3'>
        <div>{dayjs.utc(post.date).format('MMM. D, YYYY')}</div>
        <div className='h-2 w-2 rounded-full bg-accent' />
        <div>{post.readingTime} minute read</div>
      </div>
      <article className='prose prose-invert prose-custom prose-blockquote:not-italic prose-img:rounded-md'>
        <Content components={components} />
      </article>
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts = getPostMetaData();
//   return posts.map(post => ({ slug: post.slug }));
// }
