import ImageCarousel from '@/components/ImageCarousel';
import { getHomeContent } from '@/lib/content';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

function readMDXFileSync(filePath: string): { data: any; content: string } {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

export default function Home() {
  const content = getHomeContent();
  const { content: mdxContent } = readMDXFileSync('home.mdx');

  // Parse markdown to HTML
  const htmlContent = mdxContent ? marked(mdxContent) : '';

  return (
    <div className="space-y-8">
      {/* Hero Carousel */}
      <ImageCarousel images={content.heroImages || []} aspectRatio="banner" />
      
      {/* Welcome Section */}
      {htmlContent && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="prose prose-gray max-w-none text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </section>
      )}
      
      {/* Facilities Section */}
      {content.facilities && content.facilities.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded shadow-sm">
                <h3 className="text-lg font-medium text-[#97437f] mb-2">{facility.title}</h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
