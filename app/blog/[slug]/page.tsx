import { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import { Post } from '@/interfaces/Posts';
import { getPostMetaData } from '@/lib/posts';

const getPost = (slug: string): Post => {
  const folder = 'content/posts/';
  const fileContents = readFileSync(`${folder}${slug}.md`, 'utf-8');
  const { data, content } = matter(fileContents);
  return { ...data, content } as Post;
};

/****************************************
 * - Blog Page -
 ***************************************/
export default function Blog({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  // Render.
  return (
    <main>
      <div className='text-2xl text-blue-400'>{post.title}</div>
      <article className='prose prose-slate lg:prose-xl'>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getPostMetaData();
  return posts.map(post => ({ slug: post.slug }));
}
