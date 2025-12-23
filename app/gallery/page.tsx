import { getPageContent } from '@/lib/content';
import { marked } from 'marked';

export default function GalleryPage() {
  const { content } = getPageContent('gallery');

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="prose prose-gray max-w-none">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </div>
  );
}


