import { FiGithub } from 'react-icons/fi';

interface Props {
  items: {
    link: string;
    text: string;
  }[];
}

export default function CodeBtns(props: Props) {
  return (
    <div className='flex gap-2'>
      {props.items.map(item => (
        <a
          key={item.text}
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          className='flex w-fit items-center gap-2 rounded-md border border-outline bg-card px-4 py-2 text-white no-underline transition-colors hover:border-accent'>
          <FiGithub />
          {item.text}
        </a>
      ))}
    </div>
  );
}
