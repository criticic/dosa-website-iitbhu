'use client';

import Image from 'next/image';
import { FaUser, FaEnvelope, FaPhone, FaFax, FaMapMarkerAlt } from 'react-icons/fa';

interface PeopleCardProps {
  person: {
    name: string;
    title?: string;
    designation?: string;
    department?: string;
    email?: string;
    phone?: string;
    fax?: string;
    address?: string;
    sections?: string[];
    photo?: string;
  };
}

export default function PeopleCard({ person }: PeopleCardProps) {
  const { name, title, designation, department, email, phone, fax, address, sections, photo } = person;
  
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 border-2 border-[#97437f]">
          {photo ? (
            <Image
              src={photo}
              alt={`${name} profile`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              unoptimized={photo.startsWith('http')}
            />
          ) : (
            <FaUser className="w-16 h-16 text-[#97437f]" />
          )}
        </div>
      </div>
      
      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
        {name}
      </h3>
      
      {/* Title/Designation */}
      {(title || designation) && (
        <p className="text-center text-[#97437f] font-medium mb-2">
          {title || designation}
        </p>
      )}
      
      {/* Department */}
      {department && (
        <p className="text-center text-gray-600 text-sm mb-3">
          {department}
        </p>
      )}
      
      {/* Sections/Units */}
      {sections && sections.length > 0 && (
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-700 mb-1">Section/Unit:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {sections.map((section, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{section}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Contact Information */}
      <div className="space-y-2 pt-3 border-t border-gray-200">
        {email && (
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#97437f] transition-colors"
          >
            <FaEnvelope className="w-4 h-4 flex-shrink-0" />
            <span className="break-all">{email}</span>
          </a>
        )}
        
        {phone && (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaPhone className="w-4 h-4 flex-shrink-0" />
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#97437f] transition-colors">
              {phone}
            </a>
          </div>
        )}
        
        {fax && (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaFax className="w-4 h-4 flex-shrink-0" />
            <span>{fax}</span>
          </div>
        )}
        
        {address && (
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}

