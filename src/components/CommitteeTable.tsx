import React from 'react';

export interface CommitteeMember {
  name: string;
  year: number | string;
  course: string;
  branch: string;
  mobileNumber: string;
  email: string;
  isConvener?: boolean;
}

interface CommitteeTableProps {
  committeeName?: string;
  members: CommitteeMember[];
  isLeadershipTable?: boolean;
}

const CommitteeTable: React.FC<CommitteeTableProps> = ({ 
  committeeName, 
  members, 
  isLeadershipTable = false 
}) => {
  return (
    <div className="mb-8">
      {committeeName && (
        <h3 className="text-xl font-medium text-[#97437f] mb-3">{committeeName}</h3>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-[#f8e5f3]">
              <th className="border p-2 text-[#97437f] text-left">Name</th>
              <th className="border p-2 text-[#97437f] text-left">Year</th>
              <th className="border p-2 text-[#97437f] text-left">Course</th>
              <th className="border p-2 text-[#97437f] text-left">Branch</th>
              <th className="border p-2 text-[#97437f] text-left">Mobile Number</th>
              <th className="border p-2 text-[#97437f] text-left">Email ID</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr 
                key={index} 
                className={member.isConvener || (isLeadershipTable && index === 0) ? "bg-[#f8e5f3] font-medium" : ""}
              >
                <td className="border p-2">{member.name}</td>
                <td className="border p-2">{member.year}</td>
                <td className="border p-2">{member.course}</td>
                <td className="border p-2">{member.branch}</td>
                <td className="border p-2">{member.mobileNumber}</td>
                <td className="border p-2">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommitteeTable;
