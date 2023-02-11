// Props.
export interface IExperience {
  title: string;
  type: 'dev' | 'bsa' | 'edu';
  duration: string;
  company: string;
  tools: string[];
  summary?: string[];
}

export const experience: IExperience[] = [
  {
    title: 'Senior Software Engineer',
    type: 'dev',
    duration: 'Jan. 2021 - Pres.',
    company: 'TD Securities',
    tools: ['React', 'Glue42', 'Express', 'MongoDB'],
    summary: [
      'Responsible for architecting, implementing, and overseeing core technical solutions.',
      'Continuously establish and refine best practices within the team to improve code quality, design, and simplicity.',
    ],
  },
  {
    title: 'Fullstack Engineer',
    type: 'dev',
    duration: 'Jul. - Dec. 2020',
    company: 'TD Securities',
    tools: ['React', 'Express', 'MongoDB'],
    summary: [
      'Responsible for architecting, implementing, and overseeing core technical solutions.',
      'Continuously establish and refine best practices within the team to improve code quality, design, and simplicity.',
    ],
  },
  {
    title: 'Systems Analyst',
    type: 'bsa',
    duration: 'Jan. - July 2020',
    company: 'TD Bank',
    tools: ['Jira', 'Microsoft Office'],
    summary: [
      'Responsible for architecting, implementing, and overseeing core technical solutions.',
      'Continuously establish and refine best practices within the team to improve code quality, design, and simplicity.',
    ],
  },
  {
    title: 'Jr. Fullstack Developer',
    type: 'dev',
    duration: 'July - Dec. 2019',
    company: 'TD Bank',
    tools: ['Angular', 'Express', 'MySQL'],
    summary: [
      'Responsible for architecting, implementing, and overseeing core technical solutions.',
      'Continuously establish and refine best practices within the team to improve code quality, design, and simplicity.',
    ],
  },
  {
    title: 'Jr. Frontend Developer',
    type: 'dev',
    duration: 'Jan - June. 2019',
    company: 'TD Securities',
    tools: ['React', 'Angular'],
    summary: [
      'Responsible for architecting, implementing, and overseeing core technical solutions.',
      'Continuously establish and refine best practices within the team to improve code quality, design, and simplicity.',
    ],
  },
];

export const education: IExperience[] = [
  {
    title: 'B.Sc. Computer Science',
    type: 'edu',
    duration: '2015 - 2018',
    company: 'Toronto Metropolitan University',
    tools: ['Honours', "Dean's List"],
  },
];
