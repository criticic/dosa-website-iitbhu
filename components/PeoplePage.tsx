'use client';

import { useState } from 'react';
import { PeopleContent } from '@/lib/types/content';
import PeopleCard from './PeopleCard';

interface PeoplePageProps {
  content: PeopleContent;
}

type TabType = 'dean' | 'associateDean' | 'assistantRegistrar' | 'staff';

interface Tab {
  id: TabType;
  label: string;
  count: number;
}

export default function PeoplePage({ content }: PeoplePageProps) {
  const { dean, associateDean, assistantRegistrar, staff } = content;

  const tabs: Tab[] = [
    { id: 'dean', label: 'Dean (Student\'s Affairs)', count: dean.length },
    { id: 'associateDean', label: 'Associate Dean (Students Affairs)', count: associateDean.length },
    { id: 'assistantRegistrar', label: 'Assistant Registrar', count: assistantRegistrar.length },
    { id: 'staff', label: 'Staff', count: staff.length },
  ].filter(tab => tab.count > 0); // Only show tabs with content

  const [activeTab, setActiveTab] = useState<TabType>(
    tabs.length > 0 ? tabs[0].id : 'dean'
  );

  // Set initial active tab to first available tab
  const getActiveTabData = () => {
    switch (activeTab) {
      case 'dean':
        return dean;
      case 'associateDean':
        return associateDean;
      case 'assistantRegistrar':
        return assistantRegistrar;
      case 'staff':
        return staff;
      default:
        return [];
    }
  };

  const activeTabData = getActiveTabData();
  const activeTabLabel = tabs.find(tab => tab.id === activeTab)?.label || '';

  // If no tabs available, show empty state
  if (tabs.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-600">No people data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-4 text-sm font-medium transition-colors duration-200
                  border-b-2 flex items-center gap-2
                  ${
                    activeTab === tab.id
                      ? 'border-[#97437f] text-[#97437f] bg-[#97437f]/5'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <span>{tab.label}</span>
                <span
                  className={`
                    px-2 py-0.5 rounded-full text-xs font-semibold
                    ${
                      activeTab === tab.id
                        ? 'bg-[#97437f] text-white'
                        : 'bg-gray-200 text-gray-600'
                    }
                  `}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[#97437f] pb-2">
          {activeTabLabel}
        </h2>
        {activeTabData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTabData.map((person, index) => (
              <PeopleCard key={index} person={person} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-8">No data available for this section.</p>
        )}
      </div>
    </div>
  );
}

