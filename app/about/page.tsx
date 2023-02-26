import Box from '@/components/Box';

/****************************************
 * - About Page -
 ***************************************/
export default function About() {
  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section className='grid gap-3'>
        <h1 className='font-serif text-4xl font-medium sm:text-5xl'>
          About Me
        </h1>
        <p>
          Hello! 👋 My name is Elijah and I'm from Ontario, Canada. I completed
          my undergrad in <span className='text-accent'>Computer Science</span>{' '}
          at Toronto Metropolitan University in 2018, and ever since, I've been
          carving out my career in the fin-tech industry.
        </p>
        <p>
          This year, two things have really captured my attention:{' '}
          <span className='text-accent'>Three.js</span> and{' '}
          <span className='text-accent'>artificial intelligence</span>.
          Hopefully you'll see some blog posts from me exploring them!
        </p>
        <div className='flex h-40 items-center justify-center'>
          <Box />
        </div>
        <p>
          When I'm not at work, you'll often find me hanging with my dogs,
          climbing, practicing piano (a new hobby), and in the winter, hitting
          the slopes for some snowboarding!
        </p>
      </section>
      <section>
        <h2>Current Stack</h2>
      </section>
      <section>
        <h2>Experience With</h2>
      </section>
    </div>
  );
}
