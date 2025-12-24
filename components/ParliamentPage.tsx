'use client';

import ImageCarousel from './ImageCarousel';
import PositionHolderCard from './PositionHolderCard';
import { ParliamentContent } from '@/lib/types/content';
import { marked } from 'marked';

interface ParliamentPageProps {
  content: ParliamentContent;
  mdxContent?: string;
}

export default function ParliamentPage({ content, mdxContent }: ParliamentPageProps) {
  const {
    parliamentImages,
    parliamentImageAspectRatio = 'banner',
    leadership,
    committees,
    initiatives = [],
    otherParliamentarians = [],
  } = content;

  return (
    <div className="space-y-8">
      {/* Main Carousel */}
      <ImageCarousel images={parliamentImages} aspectRatio={parliamentImageAspectRatio} />
      
      {/* About Students' Parliament */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About Students&apos; Parliament
        </h2>
        <div className="text-gray-600 prose prose-gray max-w-none">
          {mdxContent ? (
            <div dangerouslySetInnerHTML={{ __html: marked(mdxContent) }} />
          ) : (
            <p className="mb-4">{content.aboutText}</p>
          )}
        </div>
      </section>

      {/* Leadership Section */}
      {leadership.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            Leadership
          </h2>
          {content.leadershipEmail && (
            <div className="text-center mb-4">
              <a 
                href={`mailto:${content.leadershipEmail}`}
                className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
              >
                {content.leadershipEmail}
              </a>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadership.map((leader, index) => (
              <PositionHolderCard key={index} holder={leader} isLeadership={true} />
            ))}
          </div>
        </section>
      )}
      
      {/* Committees */}
      {committees.map((committee, index) => {
        // Skip Executive Body since it's redundant with the Leadership section
        if (committee.name.toLowerCase() === 'executive body') return null;

        if (committee.members.length === 0) return null;

        return (
          <section key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
              {committee.name}
            </h2>
            {committee.email && (
              <div className="text-center mb-4">
                <a 
                  href={`mailto:${committee.email}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
                >
                  {committee.email}
                </a>
              </div>
            )}
            {committee.description && (
              <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
                {committee.description}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {committee.members.map((member, memberIndex) => (
                <PositionHolderCard
                  key={memberIndex}
                  holder={{
                    position: member.isConvener ? (member.role || 'Convenor') : (member.role || 'Member'),
                    name: member.name,
                    email: member.email,
                    photo: member.photo,
                    isConvener: member.isConvener,
                    role: member.role,
                  }}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Other Parliamentarians */}
      {otherParliamentarians.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            Other Parliamentarians
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherParliamentarians.map((member, index) => (
              <PositionHolderCard 
                key={index} 
                holder={{
                  position: 'Parliamentarian',
                  name: member.name,
                  email: member.email,
                  photo: member.photo,
                }} 
              />
            ))}
          </div>
        </section>
      )}

      {/* Current Initiatives */}
      {initiatives.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
            Current Initiatives
          </h2>
          <div className="space-y-4">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-[#97437f] mb-2">{initiative.title}</h3>
                <p className="text-gray-600">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

