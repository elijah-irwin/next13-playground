'use client';

import { useState } from 'react';
import { FiCode, FiPieChart } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';
import { IExperience } from '@/content/experience';

/****************************************
 * - ExpCard.tsx -
 ***************************************/
export default function ExpCard({
  title,
  type,
  company,
  duration,
  tools,
  summary,
}: IExperience) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(prev => !prev)}
      className='flex flex-col gap-3 rounded-lg border-[1px] border-slate-300 p-5 shadow-sm'>
      <div>
        <div className='mb-1 flex items-center justify-between'>
          <div className='text-xl font-bold'>{title}</div>
          <div className='text-2xl'>
            {type === 'dev' && <FiCode />}
            {type === 'bsa' && <FiPieChart />}
            {type === 'edu' && <MdSchool />}
          </div>
        </div>

        <div className='flex justify-between'>
          <div>{company}</div>
          <div>{duration}</div>
        </div>
      </div>

      {open && (
        <>
          <div className='flex gap-2'>
            {tools.map(tool => (
              <div key={tool} className='rounded-md bg-slate-400 py-[2px] px-2'>
                {tool}
              </div>
            ))}
          </div>
          {summary && (
            <div className='flex flex-col gap-2'>
              {summary.map((x, i) => (
                <p key={i}>{x}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
