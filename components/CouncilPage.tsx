'use client';

import Link from 'next/link';
import ImageCarousel from './ImageCarousel';
import PositionHolderCard from './PositionHolderCard';
import CounsellorCard from './CounsellorCard';
import { CouncilContent } from '@/lib/types/content';
import { marked } from 'marked';

interface CouncilPageProps {
  content: CouncilContent;
  mdxContent?: string;
}

export default function CouncilPage({ content, mdxContent }: CouncilPageProps) {
  const {
    councilName,
    councilSlug,
    councilImages,
    councilImageAspectRatio = 'banner',
    counsellors = [],
    positionHolders,
    achievements,
    clubs,
    festName,
    festImages = [],
    festImageAspectRatio = "banner",
    festText = '',
  } = content;

  return (
    <div className="space-y-8">
      {/* Main Carousel */}
      <ImageCarousel images={councilImages} aspectRatio={councilImageAspectRatio} />
      
      {/* About Council Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About {councilName}
        </h2>
        <div className="text-gray-600 prose prose-gray max-w-none">
          {mdxContent ? (
            <div dangerouslySetInnerHTML={{ __html: marked(mdxContent) }} />
          ) : (
            <p>{content.aboutText}</p>
          )}
        </div>
      </section>

      {/* Counsellors Section */}
      {counsellors.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            Counsellors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {counsellors.map((counsellor, index) => (
              <CounsellorCard key={index} counsellor={counsellor} />
            ))}
          </div>
        </section>
      )}
      
      {/* Position Holders Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Position Holders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {positionHolders.map((holder, index) => (
            <PositionHolderCard key={index} holder={holder} />
          ))}
        </div>
      </section>
      
      {/* Clubs Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Clubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clubs.map((club, index) => (
            <Link 
              key={index}
              href={`/councils/${councilSlug}/clubs/${club.slug}`}
              className="bg-gray-50 p-4 rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-[#97437f] text-lg mb-2">{club.name}</h3>
              <p className="text-gray-600 text-sm">{club.description}</p>
              <span className="inline-block mt-3 text-xs text-[#97437f] font-medium">View Details →</span>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Achievements
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
      
      {/* Fest Section - Only show if festName is provided */}
      {festName && festImages.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            {festName}
          </h2>
          
          <div className="mb-6">
            <ImageCarousel images={festImages} aspectRatio={festImageAspectRatio}/>
          </div>
          
          {festText && (
            <p className="text-gray-600 whitespace-pre-line">
              {festText}
            </p>
          )}
        </section>
      )}
    </div>
  );
}

