/****************************************
 * - About Page -
 ***************************************/
export default function About() {
  // Render.
  return (
    <div className='flex flex-col gap-10'>
      <section>
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
      <div className='border-t border-outline' />
      <section className='flex h-96 items-center justify-center'>
        <div>Some cool Threejs thing</div>
      </section>
    </div>
  );
}
