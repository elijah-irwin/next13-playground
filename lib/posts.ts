import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { PostMetaData } from '@/interfaces/Posts';

export const getPostMetaData = (): PostMetaData[] => {
  const folder = 'content/posts/';
  const files = readdirSync(folder);
  const postFiles = files.filter(file => file.endsWith('.md'));

  return postFiles.map(fileName => {
    const content = readFileSync(`${folder}/${fileName}`, 'utf-8');
    const { data } = matter(content);
    return data as PostMetaData;
  });
};
