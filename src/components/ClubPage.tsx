import React from 'react';
import ImageCarousel from './ImageCarousel';

export interface ClubPositionHolder {
  position: string;
  name: string;
  email: string;
}

export interface ClubPageProps {
  clubName: string;
  councilName: string;
  clubImages: string[];
  aboutText: string;
  positionHolders: ClubPositionHolder[];
  achievements: string[];
  eventName?: string;
  eventImages?: string[];
  eventText?: string;
}

const ClubPage: React.FC<ClubPageProps> = ({
  clubName,
  councilName,
  clubImages,
  aboutText,
  positionHolders,
  achievements,
  eventName,
  eventImages = [],
  eventText = '',
}) => {
  return (
    <div className="space-y-8">
      {/* Breadcrumb navigation */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="hover:text-[#97437f]">
          <a href={`/councils/${getCouncilPath(councilName)}`}>{councilName}</a>
        </span>
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
      {eventName && eventImages.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            {eventName}
          </h2>
          
          <div className="mb-6">
            <ImageCarousel images={eventImages} />
          </div>
          
          <p className="text-gray-600 whitespace-pre-line">
            {eventText}
          </p>
        </section>
      )}
    </div>
  );
};

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

export default ClubPage;
