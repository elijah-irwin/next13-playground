import Image from 'next/image';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

// Content.
import photo from '@/public/dud.jpg';
import { allPosts } from 'contentlayer/generated';

/****************************************
 * - Home Page -
 ***************************************/
export default function Home() {
  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='mb-3 text-5xl'>Elijah Irwin</h1>
            <h3 className='text-xl text-slate-400 sm:flex sm:gap-1'>
              <div>Senior Software Engineer</div>
              <div>@ TD Securities</div>
            </h3>
          </div>
          <div className='relative min-h-[95px] min-w-[95px] rounded-full border-4 border-red-300'>
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
          pulvinar. Vivamus ac efficitur nunc. Fusce nisi lacus, pulvinar non
          elit at, mollis molestie est. Etiam volutpat in dui quis iaculis.
          Donec pretium odio a aliquet volutpat
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h2 className='text-3xl'>Recent posts</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='h-[200px] w-full rounded-lg  border-slate-300 bg-gradient-to-br from-slate-300 shadow-sm' />
          <div className='h-[200px] w-full rounded-lg  border-slate-300 bg-gradient-to-br from-slate-300 shadow-sm' />
        </div>
        <div className='flex items-center gap-2'>
          <Link href='/blog'>Read something else</Link>
          <HiArrowNarrowRight size={20} />
        </div>
      </section>
    </div>
  );
}
