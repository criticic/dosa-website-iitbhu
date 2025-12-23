import ParliamentPage from '@/components/ParliamentPage';
import { getParliamentContent } from '@/lib/content';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Force dynamic rendering to ensure content updates are reflected
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

