import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CouncilContent, ClubContent, ParliamentContent, HomeContent } from './types/content';

const contentDirectory = path.join(process.cwd(), 'content');

// Helper to read and parse MDX file
function readMDXFile(filePath: string): { data: any; content: string } {
  const fullPath = path.join(contentDirectory, filePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content file not found: ${fullPath}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

// Get council content
export function getCouncilContent(slug: string): CouncilContent {
  const { data, content } = readMDXFile(`councils/${slug}.mdx`);
  return {
    ...data,
    aboutText: content.trim(),
  } as CouncilContent;
}

// Get club content
export function getClubContent(councilSlug: string, clubSlug: string): ClubContent {
  const { data, content } = readMDXFile(`clubs/${councilSlug}/${clubSlug}.mdx`);
  return {
    ...data,
    aboutText: content.trim(),
  } as ClubContent;
}

// Get parliament content
export function getParliamentContent(): ParliamentContent {
  const { data, content } = readMDXFile('councils/parliament.mdx');
  return {
    ...data,
    aboutText: content.trim(),
  } as ParliamentContent;
}

// Get home content
export function getHomeContent(): HomeContent {
  const { data, content } = readMDXFile('home.mdx');
  return {
    ...data,
    aboutText: content.trim(),
  } as HomeContent;
}

// Get all clubs for a council
export function getAllClubs(councilSlug: string): ClubContent[] {
  const clubsDir = path.join(contentDirectory, 'clubs', councilSlug);
  if (!fs.existsSync(clubsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(clubsDir);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = path.basename(file, '.mdx');
      return getClubContent(councilSlug, slug);
    });
}

// Get all councils
export function getAllCouncils(): string[] {
  const councilsDir = path.join(contentDirectory, 'councils');
  if (!fs.existsSync(councilsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(councilsDir);
  return files
    .filter(file => file.endsWith('.mdx') && file !== 'parliament.mdx')
    .map(file => path.basename(file, '.mdx'));
}

// Get other page content (people, news, antiragging, gallery)
export function getPageContent(pageName: string): { data: any; content: string } {
  const { data, content } = readMDXFile(`${pageName}.mdx`);
  return { data, content };
}


