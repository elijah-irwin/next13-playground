import Image from 'next/image';
import PostPreview from '@/components/PostPreview';

// Content.
import { allPosts } from '@/.contentlayer/generated';
import photo from '@/public/dud.jpg';

/****************************************
 * - Home Page -
 ***************************************/
export default function Home() {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 2);

  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <div className='mb-5 sm:mb-10 flex items-center gap-5 justify-between'>
          <div>
            <h1 className='mb-3 font-serif text-4xl sm:text-5xl'>Elijah Irwin</h1>
            <h3 className='text-lg sm:text-xl text-text-sub'>
              <div>Senior Software Engineer</div>
              <div>at TD Securities</div>
            </h3>
          </div>
          <div className='relative min-h-[85px] min-w-[85px] rounded-full border-[5px] border-accent'>
            <Image
              src={photo}
              fill={true}
              alt='photo of Elijah'
              priority={true}
              placeholder='blur'
              quality={100}
              className='rounded-full'
            />
          </div>
        </div>
        <p className='mb-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          fringilla nisi. Nam sodales ipsum sit amet ex elementum ullamcorper.
          Vestibulum luctus sed nulla eget porta.
        </p>
        <p>
          Nunc eleifend odio vel bibendum rutrum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque ut libero id sapien sodales
          pulvinar. Vivamus ac efficitur nunc.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        {posts.map(post => (
          <PostPreview key={post._id} {...post} />
        ))}
        {posts.map(post => (
          <PostPreview key={post._id} {...post} />
        ))}
        {posts.map(post => (
          <PostPreview key={post._id} {...post} />
        ))}
        {posts.map(post => (
          <PostPreview key={post._id} {...post} />
        ))}
        <button className='ml-1 text-text-sub mt-1 text-left'>
          Read something else -->
        </button>
      </section>
    </div>
  );
}
