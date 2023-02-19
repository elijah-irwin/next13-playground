/****************************************
 * - About Page -
 ***************************************/
export default function About() {
  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <p className='pb-3'>
          Greetings! 👋 My name is Elijah and I hail from Canada. I completed my
          studies at Toronto Metropolitan University in 2018, and ever since,
          I've been carving out my career in the fintech industry. My experience
          thus far has shown me the value of collaborating with enthusiastic and
          motivated people who share my passion for tech. There is always
          something new and interesting around the corner and I greatly value
          being able to work alongside those who share this excitement!
        </p>
        <p className='pb-3'>
          This year, two things have captured my attention: Threejs and
          Artificial Intelligence. Hopefully you'll see some blog posts from me
          exploring them!
        </p>
        <p>
          When I'm not at work, you'll often find me hanging out with my dogs
          🐶, climbing 🧗, practicing piano (a new hobby of mine) 🎹, and
          hitting the slopes for some snowboarding in the winter. 🏂
        </p>
      </section>
      <section className='flex h-52 items-center justify-center'>
        <div>Some cool Threejs thing</div>
      </section>
    </div>
  );
}
