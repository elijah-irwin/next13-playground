import Image from 'next/image';

// Content.
import photo1 from '@/public/dor.jpg';
import photo2 from '@/public/dud2.jpg';

const spotify = [
  'https://open.spotify.com/embed/track/4Hff1IjRbLGeLgFgxvHflk?utm_source=generator',
  'https://open.spotify.com/embed/track/1MOsWaaMx4L7YUYGu7LdEx?utm_source=generator',
  'https://open.spotify.com/embed/track/5nBqvq3hUl8n6HtKtwNphW?utm_source=generator&theme=0',
  'https://open.spotify.com/embed/track/4UhxYZIDeO7pTu1wC8K6tH?utm_source=generator',
];

/****************************************
 * - About Page -
 ***************************************/
export default function About() {
  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <div className='grid h-96 grid-cols-5 gap-5'>
          <div className='relative col-span-3'>
            <Image
              src={photo1}
              quality={100}
              fill={true}
              alt='photo of the author'
              className='rounded-md object-cover'
            />
          </div>
          <div className='relative col-span-2'>
            <Image
              src={photo2}
              quality={100}
              fill={true}
              alt='photo of the author'
              className='rounded-md object-cover'
            />
          </div>
        </div>
        <h1 className='my-5 text-5xl'>A little about me</h1>
        <p className='pb-3'>
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
      <section>
        <h2 className='mb-3 text-3xl'>Some interests</h2>
        <div className='grid h-80 grid-cols-12 gap-3'>
          <div className='col-span-5 bg-gradient-to-br from-pink-200'>
            Climbing
          </div>
          <div className='col-span-3 bg-gradient-to-br from-pink-200'>
            Climbing
          </div>
          <div className='col-span-4 bg-gradient-to-br from-pink-200'>
            Climbing
          </div>
          <div className='col-span-3 bg-gradient-to-br from-pink-200'>
            Climbing
          </div>
          <div className='col-span-4 bg-gradient-to-br from-pink-200'>
            Climbing
          </div>
          <div className='col-span-5 bg-gradient-to-br from-pink-200'>
            Climbing
          </div>
        </div>
      </section>
      <section>
        <h2 className='mb-3 flex items-center gap-2 text-3xl'>
          <div>Some tunes</div>
          <div className='text-lg text-slate-400'>(share yours with me!)</div>
        </h2>
        <div className='flex flex-col gap-5'>
          {spotify.map(song => (
            <div>
              <iframe
                className='rounded-lg'
                src={song}
                width='100%'
                height='152px'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='mb-3 flex items-center gap-2 text-3xl'>
          <div>Some cool things</div>
          <div className='text-lg text-slate-400'>(not affiliated!)</div>
        </h2>
      </section>
    </div>
  );
}
