import Link from 'next/link';
import Image from 'next/image';
import { getAllCouncils, getCouncilContent } from '@/lib/content';

// Council metadata for display
const councilMetadata: { [key: string]: { name: string; description: string } } = {
  parliament: {
    name: "Students' Parliament",
    description: "The highest representative body of students, serving as a critical link between students and the Institute administration."
  },
  cultural: {
    name: "Cultural Council",
    description: "Promotes cultural activities, organizes events, and manages various cultural clubs and societies."
  },
  fmc: {
    name: "Film and Media Council",
    description: "Fosters creativity in film, media, photography, and design through various clubs and events."
  },
  gnsc: {
    name: "Games and Sports Council",
    description: "Dedicated to promoting physical fitness, sportsmanship, and athletic excellence among students."
  },
  sntc: {
    name: "Science and Technology Council",
    description: "Encourages scientific innovation, technical skills, and research through various technical clubs."
  },
  ssc: {
    name: "Social Service Council",
    description: "Engages students in social service activities, community outreach, and social welfare initiatives."
  }
};

export default async function CouncilsPage() {
  const councilSlugs = getAllCouncils();
  
  // Include parliament in the list
  const allCouncils = ['parliament', ...councilSlugs];
  
  // Get council data for images
  const councilsWithData = allCouncils.map(slug => {
    try {
      const content = slug === 'parliament' 
        ? null // Parliament has different structure
        : getCouncilContent(slug);
      
      return {
        slug,
        name: councilMetadata[slug]?.name || slug,
        description: councilMetadata[slug]?.description || '',
        image: content?.councilImages?.[0] || '/iitbhu-logo.png',
      };
    } catch (error) {
      return {
        slug,
        name: councilMetadata[slug]?.name || slug,
        description: councilMetadata[slug]?.description || '',
        image: '/iitbhu-logo.png',
      };
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Councils</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the various councils and student bodies that make up the vibrant student community at IIT (BHU) Varanasi.
          </p>
        </div>

        {/* Councils Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {councilsWithData.map((council) => (
            <Link
              key={council.slug}
              href={`/councils/${council.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Council Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={council.image}
                  alt={council.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={council.image.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-bold text-white mb-1">{council.name}</h2>
                </div>
              </div>
              
              {/* Council Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {council.description}
                </p>
                <div className="mt-4 flex items-center text-[#97437f] font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Learn More
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


