import { experience, education } from '@/content/experience';
import ExpCard from '@/components/ExpCard';

/****************************************
 * - Work Page -
 ***************************************/
export default function Work() {
  return (
    <div className='grid gap-10'>
      <section>
        <h1 className='mb-4 text-3xl'>What I'm learning</h1>
        <div className='grid h-40 grid-cols-3 gap-5'>
          <div className='bg-slate-300' />
          <div className='bg-slate-300' />
          <div className='bg-slate-300' />
        </div>
      </section>
      <section className='grid gap-4'>
        <h1 className='text-3xl'>Professional experience</h1>
        {experience.map(exp => (
          <ExpCard {...exp} />
        ))}
      </section>
      <section className='grid gap-4'>
        <h1 className='text-3xl'>Education</h1>
        {education.map(edu => (
          <ExpCard {...edu} />
        ))}
      </section>
    </div>
  );
}
