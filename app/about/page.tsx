import Box from '@/components/Box';

/****************************************
 * - About Page -
 ***************************************/
export default function About() {
  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section className='grid gap-3'>
        <p>
          Greetings! 👋 My name is Elijah and I hail from Canada. I completed my
          undergrad in Computer Science at Toronto Metropolitan University in
          2018, and ever since, I've been carving out my career in the fintech
          industry.
        </p>
        <p>
          My experience thus far has shown me the value of collaborating with
          people enthusiastic and motivated by tech. There is always something
          new and interesting around the corner and I greatly value being able
          to work alongside those who share this excitement!
        </p>
        <p>
          This year, two things have really captured my attention: Threejs and
          Artificial Intelligence. Hopefully you'll see some blog posts from me
          exploring them!
        </p>
        <p>
          When I'm not at work, you'll often find me hanging out with my dogs
          🐶, climbing 🧗, practicing piano (a new hobby of mine) 🎹, and in the
          winter, hitting the slopes for some snowboarding. 🏂
        </p>
      </section>
      <section className='flex h-52 items-center justify-center'>
        <Box />
      </section>
    </div>
  );
}
