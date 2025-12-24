'use client';

import Image from 'next/image';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Counsellor } from '@/lib/types/content';

interface CounsellorCardProps {
  counsellor: Counsellor;
}

export default function CounsellorCard({ counsellor }: CounsellorCardProps) {
  const { position, name, email, photo } = counsellor;

  return (
    <div className="bg-gray-50 p-4 rounded shadow-sm border-2 border-[#97437f]">
      {/* Profile Image */}
      <div className="flex justify-center mb-3">
        <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 border-2 border-[#97437f]">
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
            <FaUser className="w-12 h-12 text-[#97437f]" />
          )}
        </div>
      </div>
      
      {/* Position */}
      <h3 className="font-medium text-[#97437f] text-center mb-1">{position}</h3>
      
      {/* Name */}
      <p className="text-gray-700 text-center mb-1">{name}</p>
      
      {/* Email */}
      {email && (
        <a 
          href={`mailto:${email}`}
          className="flex items-center justify-center gap-1 text-sm text-gray-600 hover:text-[#97437f] transition-colors"
          aria-label={`Email ${name} at ${email}`}
        >
          <FaEnvelope className="w-3 h-3 flex-shrink-0" />
          <span className="truncate" title={email}>{email}</span>
        </a>
      )}
    </div>
  );
}


