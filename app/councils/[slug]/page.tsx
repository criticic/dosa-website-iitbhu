import { notFound } from 'next/navigation';
import CouncilPage from '@/components/CouncilPage';
import { getCouncilContent, getAllCouncils } from '@/lib/content';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function readMDXFileSync(filePath: string): { data: any; content: string } {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

export async function generateStaticParams() {
  const councils = getAllCouncils();
  return councils.map((slug) => ({
    slug,
  }));
}

export default async function CouncilPageRoute({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  try {
    const content = getCouncilContent(slug);
    const { content: mdxContent } = readMDXFileSync(`councils/${slug}.mdx`);

    return <CouncilPage content={content} mdxContent={mdxContent} />;
  } catch (error) {
    notFound();
  }
}

