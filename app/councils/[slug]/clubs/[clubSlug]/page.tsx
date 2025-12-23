import { notFound } from 'next/navigation';
import ClubPage from '@/components/ClubPage';
import { getClubContent } from '@/lib/content';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function readMDXFileSync(filePath: string): { data: any; content: string } {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

export default async function ClubPageRoute({ 
  params 
}: { 
  params: Promise<{ slug: string; clubSlug: string }> 
}) {
  const { slug, clubSlug } = await params;
  
  try {
    const content = getClubContent(slug, clubSlug);
    const { content: mdxContent } = readMDXFileSync(`clubs/${slug}/${clubSlug}.mdx`);

    return <ClubPage content={content} mdxContent={mdxContent} />;
  } catch (error) {
    notFound();
  }
}

