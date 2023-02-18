import Image from 'next/image';
import noise from '../public/noise.svg';

export default function Grain() {
  return (
    <div className='pointer-events-none fixed isolate aspect-square min-h-screen mix-blend-soft-light'>
      <Image priority src={noise} fill alt='grain effect' />
    </div>
  );
}
