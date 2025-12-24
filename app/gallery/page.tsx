import { getPageContent } from '@/lib/content';
import { getGalleryImages } from '@/lib/gallery';
import { marked } from 'marked';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  const { data, content } = getPageContent('gallery');
  
  // Get whitelist and blacklist from frontmatter
  const whitelist = (data.whitelistDirectories as string[] | undefined);
  const blacklist = (data.blacklistDirectories as string[] | undefined) || [];
  
  // Get all images sorted by recent first
  // Pass null if whitelist is empty/undefined, otherwise pass the whitelist array
  const images = getGalleryImages(
    whitelist && whitelist.length > 0 ? whitelist : null,
    blacklist
  );

  const htmlContent = content ? marked(content.trim()) : '';

  return (
    <div className="space-y-8">
      {/* Page Header/Content */}
      {htmlContent && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="prose prose-gray max-w-none">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </section>
      )}
      
      {/* Gallery Grid */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[#97437f] pb-2">
          Gallery
        </h2>
        <div className="text-sm text-gray-600 mb-4">
          Showing {images.length} image{images.length !== 1 ? 's' : ''}
        </div>
        <GalleryGrid images={images} />
      </section>
    </div>
  );
}


