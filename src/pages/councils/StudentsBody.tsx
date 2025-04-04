import React from 'react';
import ImageCarousel from '../../components/ImageCarousel';
import CommitteeTable, { CommitteeMember } from '../../components/CommitteeTable';

// Placeholder images for carousel
const parliamentImages = [
  'https://placehold.co/800x450/97437f/white?text=Students+Parliament+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Students+Parliament+Image+2',
  'https://placehold.co/800x450/723261/white?text=Students+Parliament+Image+3',
];

// Mock data for parliamentarians
const leadershipMembers: CommitteeMember[] = [
  {
    name: 'Vice President',
    year: 4,
    course: 'B.Tech',
    branch: 'Computer Science',
    mobileNumber: '9876543210',
    email: 'vp@example.com'
  },
  {
    name: 'Assistant Vice President',
    year: 3,
    course: 'B.Tech',
    branch: 'Electrical Engineering',
    mobileNumber: '9876543211',
    email: 'avp@example.com'
  }
];

const parliamentaryAffairsMembers: CommitteeMember[] = [
  {
    name: 'Convener Name',
    year: 3,
    course: 'B.Tech',
    branch: 'Mechanical Engineering',
    mobileNumber: '9876543212',
    email: 'parliamentary@example.com',
    isConvener: true
  },
  {
    name: 'Member Name',
    year: 2,
    course: 'B.Tech',
    branch: 'Civil Engineering',
    mobileNumber: '9876543213',
    email: 'member1@example.com'
  },
  {
    name: 'Member Name',
    year: 2,
    course: 'B.Tech',
    branch: 'Chemical Engineering',
    mobileNumber: '9876543214',
    email: 'member2@example.com'
  }
];

const infrastructureMembers: CommitteeMember[] = [
  {
    name: 'Convener Name',
    year: 3,
    course: 'B.Tech',
    branch: 'Civil Engineering',
    mobileNumber: '9876543215',
    email: 'infrastructure@example.com',
    isConvener: true
  },
  {
    name: 'Member Name',
    year: 2,
    course: 'B.Tech',
    branch: 'Mechanical Engineering',
    mobileNumber: '9876543216',
    email: 'member3@example.com'
  }
];

const securityMembers: CommitteeMember[] = [
  {
    name: 'Convener Name',
    year: 3,
    course: 'B.Tech',
    branch: 'Electronics Engineering',
    mobileNumber: '9876543217',
    email: 'security@example.com',
    isConvener: true
  },
  {
    name: 'Member Name',
    year: 2,
    course: 'B.Tech',
    branch: 'Electrical Engineering',
    mobileNumber: '9876543218',
    email: 'member4@example.com'
  }
];

const financeMembers: CommitteeMember[] = [
  {
    name: 'Convener Name',
    year: 4,
    course: 'B.Tech',
    branch: 'Metallurgical Engineering',
    mobileNumber: '9876543219',
    email: 'finance@example.com',
    isConvener: true
  },
  {
    name: 'Member Name',
    year: 3,
    course: 'B.Tech',
    branch: 'Chemical Engineering',
    mobileNumber: '9876543220',
    email: 'member5@example.com'
  }
];

const ugAcademicMembers: CommitteeMember[] = [
  {
    name: 'Convener Name',
    year: 3,
    course: 'B.Tech',
    branch: 'Computer Science',
    mobileNumber: '9876543221',
    email: 'ugacademic@example.com',
    isConvener: true
  },
  {
    name: 'Member Name',
    year: 2,
    course: 'B.Tech',
    branch: 'Electronics Engineering',
    mobileNumber: '9876543222',
    email: 'member6@example.com'
  }
];

const pgAcademicMembers: CommitteeMember[] = [
  {
    name: 'Convener Name',
    year: 2,
    course: 'M.Tech',
    branch: 'Computer Science',
    mobileNumber: '9876543223',
    email: 'pgacademic@example.com',
    isConvener: true
  }
];

// Add more committees as needed

const StudentsBody: React.FC = () => {
  // List of all committees with their data
  const committees = [
    { name: 'Parliamentary Affairs Committee', members: parliamentaryAffairsMembers },
    { name: 'Infrastructure Committee', members: infrastructureMembers },
    { name: 'Security Committee', members: securityMembers },
    { name: 'Finance Committee', members: financeMembers },
    { name: 'Undergraduate Student Academic Committee', members: ugAcademicMembers },
    { name: 'Postgraduate Student Academic Committee', members: pgAcademicMembers },
    { name: 'Grievance Committee', members: [
      {
        name: 'Convener Name',
        year: 3,
        course: 'B.Tech',
        branch: 'Mechanical Engineering',
        mobileNumber: '9876543224',
        email: 'grievance@example.com',
        isConvener: true
      }
    ]},
    { name: 'Student Placement Committee', members: [
      {
        name: 'Convener Name',
        year: 4,
        course: 'B.Tech',
        branch: 'Computer Science',
        mobileNumber: '9876543225',
        email: 'placement@example.com',
        isConvener: true
      }
    ]},
  ];

  return (
    <div className="space-y-8">
      {/* Main Carousel */}
      <ImageCarousel images={parliamentImages} aspectRatio="banner" />
      
      {/* About Students' Parliament */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About Students' Parliament
        </h2>
        <p className="text-gray-600 mb-4">
        The Students’ Parliament is the highest representative body of students in the Institute. It serves as a critical link between the students and the Institute administration, acting like a feedback system in matters of policy via various standing committees. The role of the Students’ Parliament is to discuss the matters of student welfare and interest and initiate proposals related to the general body for implementation by the Institute through the DoSA. It acts as the collective voice of the students and represents the general body at all forums, within or outside the Institute. The Parliament consists of the Vice President (Convener), the Assistant Vice President (Co-Convener), the elected Parliamentarians, the General Secretaries of all the Councils, and two students nominated by the Patron.
        </p>
      </section>
      
      {/* Current Initiatives */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Current Initiatives
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Student Welfare Program</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Campus Infrastructure Enhancement</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Academic Excellence Drive</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      
      {/* Current Parliamentarians */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[#97437f] pb-2">
          Current Parliamentarians
        </h2>
        
        {/* VP and AVP */}
        <CommitteeTable 
          members={leadershipMembers} 
          isLeadershipTable={true} 
        />
        
        {/* Committee Tables - Now showing all committees */}
        {committees.map((committee, index) => (
          <CommitteeTable 
            key={index}
            committeeName={committee.name} 
            members={committee.members} 
          />
        ))}
      </section>
    </div>
  );
};

export default StudentsBody;
