import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Film+and+Media+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Film+and+Media+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Film+and+Media+Council+Image+3',
];

const festImages = [
  'https://placehold.co/800x450/97437f/white?text=FMC+Weekend+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=FMC+Weekend+Image+2',
  'https://placehold.co/800x450/723261/white?text=FMC+Weekend+Image+3',
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
    name: 'Cine Club',
    slug: 'cine',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Animation Club',
    slug: 'animation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Design Club',
    slug: 'design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Media Club',
    slug: 'media',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Photography Club',
    slug: 'photography',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Outreach Club',
    slug: 'outreach',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const FilmandMediaCouncil: React.FC = () => {
  return (
    <CouncilPage 
      councilName="Film and Media Council"
      councilSlug="fmc"
      councilImages={councilImages}
      aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      positionHolders={positionHolders}
      achievements={achievements}
      clubs={clubs}
      festName="FMC Weekend - Asia's Largest Digital Arts Festival"
      festImages={festImages}
      festText={festText}
    />
  );
};

export default FilmandMediaCouncil;
