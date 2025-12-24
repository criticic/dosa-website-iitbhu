'use client';

import Link from 'next/link';
import ImageCarousel from './ImageCarousel';
import PositionHolderCard from './PositionHolderCard';
import { ClubContent } from '@/lib/types/content';
import { marked } from 'marked';

interface ClubPageProps {
  content: ClubContent;
  mdxContent?: string;
}

// Helper function to get appropriate council path from council name
function getCouncilPath(councilName: string): string {
  const pathMap: {[key: string]: string} = {
    'Cultural Council': 'cultural',
    'Film and Media Council': 'fmc',
    'Games and Sports Council': 'gnsc',
    'Science and Technology Council': 'sntc',
    'Social Service Council': 'ssc'
  };
  
  return pathMap[councilName] || 'cultural';
}

export default function ClubPage({ content, mdxContent }: ClubPageProps) {
  const {
    clubName,
    councilName,
    clubImages,
    positionHolders,
    achievements,
    eventName,
    eventImages = [],
    eventText = '',
  } = content;

  return (
    <div className="space-y-8">
      {/* Breadcrumb navigation */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href={`/councils/${getCouncilPath(councilName)}`} className="hover:text-[#97437f]">
          {councilName}
        </Link>
        {' > '}
        <span className="text-[#97437f] font-medium">{clubName}</span>
      </div>
      
      {/* Main Carousel */}
      <ImageCarousel images={clubImages} aspectRatio="banner" />
      
      {/* About Club Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About {clubName}
        </h2>
        <div className="text-gray-600 prose prose-gray max-w-none">
          {mdxContent ? (
            <div dangerouslySetInnerHTML={{ __html: marked(mdxContent) }} />
          ) : (
            <p>{content.aboutText}</p>
          )}
        </div>
      </section>
      
      {/* Position Holders Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Position Holders
        </h2>
        {content.positionHoldersEmail && (
          <div className="text-center mb-4">
            <a 
              href={`mailto:${content.positionHoldersEmail}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
            >
              {content.positionHoldersEmail}
            </a>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {positionHolders.map((holder, index) => (
            <PositionHolderCard key={index} holder={holder} />
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
      
      {/* Event Section - Only show if eventName is provided */}
      {eventName && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            {eventName}
          </h2>
          
          {eventImages.length > 0 && (
            <div className="mb-6">
              <ImageCarousel images={eventImages} />
            </div>
          )}
          
          {eventText && (
            <div className="text-gray-600 prose prose-gray max-w-none">
              <div dangerouslySetInnerHTML={{ __html: marked(eventText) }} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}

