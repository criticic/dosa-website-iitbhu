import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Social+Service+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Social+Service+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Social+Service+Council+Image+3',
];

const festImages = [
  'https://placehold.co/800x450/97437f/white?text=Jagriti+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Jagriti+Image+2',
  'https://placehold.co/800x450/723261/white?text=Jagriti+Image+3',
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
    name: 'Sahyog Club',
    slug: 'sahyog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Social Projects Club',
    slug: 'social-projects',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Kashi Utkarsh',
    slug: 'kashi-utkarsh',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Health and Hygiene Club',
    slug: 'health-hygiene',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const SocialServiceCouncil: React.FC = () => {
  return (
    <CouncilPage 
      councilName="Social Service Council"
      councilSlug="ssc"
      councilImages={councilImages}
      aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      positionHolders={positionHolders}
      achievements={achievements}
      clubs={clubs}
      festName="Jagriti - Annual Socio-Awareness Festival"
      festImages={festImages}
      festText={festText}
    />
  );
};

export default SocialServiceCouncil;
