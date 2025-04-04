import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Science+and+Technology+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Science+and+Technology+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Science+and+Technology+Council+Image+3',
];

const festImages = [
  'https://placehold.co/800x450/97437f/white?text=Technex+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Technex+Image+2',
  'https://placehold.co/800x450/723261/white?text=Technex+Image+3',
];

const positionHolders: PositionHolder[] = [
  {
    position: 'General Secretary',
    name: 'Lorem Ipsum',
    email: 'lorem.ipsum@example.com'
  },
  {
    position: 'Joint General Secretary',
    name: 'Lorem Ipsum',
    email: 'lorem.ipsum@example.com'
  },
  {
    position: 'Joint General Secretary',
    name: 'Lorem Ipsum',
    email: 'lorem.ipsum@example.com'
  }
];

const achievements = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  'Duis aute irure dolor in reprehenderit in voluptate velit.',
  'Excepteur sint occaecat cupidatat non proident.'
];

const clubs: Club[] = [
  {
    name: 'Club of Programmers (COPS)',
    slug: 'cops',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'AeroModelling Club',
    slug: 'aero',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Astronomy Club',
    slug: 'astronomy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Business Club',
    slug: 'business',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'SAE (Society of Automotive Engineers)',
    slug: 'sae',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Robotics Club',
    slug: 'robotics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ScienceandTechnologyCouncil: React.FC = () => {
  return (
    <CouncilPage 
      councilName="Science and Technology Council"
      councilSlug="sntc"
      councilImages={councilImages}
      aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      positionHolders={positionHolders}
      achievements={achievements}
      clubs={clubs}
      festName="Technex - Asia's Oldest Techno-Management Festival"
      festImages={festImages}
      festText={festText}
    />
  );
};

export default ScienceandTechnologyCouncil;
