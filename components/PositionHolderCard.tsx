'use client';

import Image from 'next/image';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { PositionHolder } from '@/lib/types/content';

interface PositionHolderCardProps {
  holder: PositionHolder & { isConvener?: boolean; role?: string };
  isLeadership?: boolean;
}

export default function PositionHolderCard({ holder, isLeadership = false }: PositionHolderCardProps) {
  const { position, name, email, photo, isConvener = false, role } = holder;
  const displayRole = role || position;

  return (
    <div className={`
      relative overflow-hidden rounded-lg border p-6 flex flex-col
      ${isConvener || isLeadership
        ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300 shadow-md' 
        : 'bg-white border-gray-300 shadow-sm'
      }
      hover:shadow-xl transition-all duration-300
    `}>
      
      {/* Convenor/Leadership Badge */}
      {(isConvener || isLeadership) && (
        <div className="absolute top-0 right-0 bg-[#97437f] text-white px-3 py-1 rounded-bl-lg text-xs font-semibold shadow-sm">
          {isLeadership 
            ? (position === 'Vice President' ? 'VP' : position === 'Assistant Vice President' ? 'AVP' : position)
            : (displayRole === 'Convenor' ? 'Convenor' : displayRole)
          }
        </div>
      )}
      
      {/* Card Content */}
      <div className="flex flex-col items-center text-center flex-grow">
        
        {/* Profile Image */}
        <div className={`
          w-24 h-24 rounded-full mb-4 shadow-md overflow-hidden flex-shrink-0
          flex items-center justify-center
          ${isConvener || isLeadership
            ? 'bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-400' 
            : 'bg-gray-50 border-2 border-gray-300'
          }
        `}>
          {photo ? (
            <Image
              src={photo}
              alt={`${name} profile`}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              unoptimized={photo.startsWith('http')}
            />
          ) : (
            <FaUser className={`w-12 h-12 ${isConvener || isLeadership ? 'text-[#97437f]' : 'text-gray-600'}`} />
          )}
        </div>
        
        {/* Name and Role */}
        <div className="space-y-1 mb-4">
          <h3 className={`text-lg font-semibold ${isConvener || isLeadership ? 'text-[#97437f]' : 'text-gray-900'}`}>
            {name}
          </h3>
          {displayRole && (
            <p className={`text-sm font-medium ${isConvener || isLeadership ? 'text-[#97437f]' : 'text-gray-700'}`}>
              {displayRole}
            </p>
          )}
        </div>
      </div>

      {/* Email Links Section */}
      {email && (
        <div className="mt-auto pt-4 border-t border-gray-300 flex flex-col items-center space-y-1">
          <a 
            href={`mailto:${email}`}
            className="flex w-full items-center justify-center gap-2 text-xs text-gray-800 hover:text-[#97437f] transition-colors font-medium"
            aria-label={`Email ${name} at ${email}`}
          >
            <FaEnvelope className="w-3 h-3 flex-shrink-0" />
            <span className="truncate" title={email}>{email}</span>
          </a>
        </div>
      )}
    </div>
  );
}

