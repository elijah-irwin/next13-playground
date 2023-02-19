import Image from 'next/image';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

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
        <div className='mb-6 flex items-center justify-between gap-6'>
          <div>
            <h1 className='mb-3 font-serif text-4xl font-medium sm:text-5xl'>
              Elijah Irwin
            </h1>
            <h3 className='text-lg text-text-sub sm:text-xl'>
              <div>Senior Software Engineer @ TD Securities</div>
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
          Hey, I'm Eli! Welcome to my little corner of the web. I'm a{' '}
          <span className='text-accent'>fullstack</span> developer from Ontario
          with a passion for <span className='text-accent'>simplifying</span>{' '}
          development workflows.
        </p>
        <p>
          I'm currently working on a modern{' '}
          <span className='text-accent'>micro-ui</span> based app ecosystem that
          powers the desktops of{' '}
          <span className='text-accent'>financial traders.</span> You can also
          find me refining our internal development platform used to streamline
          the creation of new apps!
        </p>
      </section>

      <section className='flex flex-col gap-5'>
        {posts.map(post => (
          <PostPreview key={post._id} {...post} />
        ))}
        <Link
          href='/blog'
          className='ml-1 mt-1 flex items-center gap-1 text-left text-text-sub transition-colors hover:text-accent'>
          Read something else <FiArrowRight className='h-5 w-5' />
        </Link>
      </section>
    </div>
  );
}
