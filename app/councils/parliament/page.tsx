import ParliamentPage from '@/components/ParliamentPage';
import { getParliamentContent } from '@/lib/content';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function readMDXFileSync(filePath: string): { data: any; content: string } {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

export default function ParliamentPageRoute() {
  const content = getParliamentContent();
  const { content: mdxContent } = readMDXFileSync('councils/parliament.mdx');

  return <ParliamentPage content={content} mdxContent={mdxContent} />;
}

