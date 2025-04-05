import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

export interface PositionHolder {
  position: string;
  name: string;
  email: string;
}

export interface Club {
  name: string;
  slug: string;
  description: string;
}

export interface CouncilPageProps {
  councilName: string;
  councilSlug: string;
  councilImages: string[];
  councilImageAspectRatio?: 'square' | 'video' | 'banner';
  aboutText: string;
  positionHolders: PositionHolder[];
  achievements: string[];
  clubs: Club[];
  festName?: string;
  festImages?: string[];
  festImageAspectRatio?: 'square' | 'video' | 'banner';
  festText?: string;
}

const CouncilPage: React.FC<CouncilPageProps> = ({
  councilName,
  councilSlug,
  councilImages,
  councilImageAspectRatio = 'banner',
  aboutText,
  positionHolders,
  achievements,
  clubs,
  festName,
  festImages = [],
  festImageAspectRatio = "banner",
  festText = '',
}) => {
  return (
    <div className="space-y-8">
      {/* Main Carousel */}
      <ImageCarousel images={councilImages} aspectRatio={councilImageAspectRatio} />
      
      {/* About Council Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About {councilName}
        </h2>
        <p className="text-gray-600">
          {aboutText}
        </p>
      </section>
      
      {/* Position Holders Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Position Holders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {positionHolders.map((holder, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded shadow-sm">
              <h3 className="font-medium text-[#97437f]">{holder.position}</h3>
              <p className="text-gray-700">{holder.name}</p>
              <p className="text-sm text-gray-500">{holder.email}</p>
            </div>
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
              to={`/councils/${councilSlug}/clubs/${club.slug}`}
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
          
          <p className="text-gray-600 whitespace-pre-line">
            {festText}
          </p>
        </section>
      )}
    </div>
  );
};

export default CouncilPage;
