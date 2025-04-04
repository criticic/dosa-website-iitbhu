import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Cultural+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Cultural+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Cultural+Council+Image+3',
];

const festImages = [
  'https://placehold.co/800x450/97437f/white?text=Kashiyatra+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Kashiyatra+Image+2',
  'https://placehold.co/800x450/723261/white?text=Kashiyatra+Image+3',
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
    name: 'Dance Freakz Club (DFZ)',
    slug: 'dance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Indian Music Club',
    slug: 'indian-music',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Western Music Club',
    slug: 'western-music',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Quiz Club',
    slug: 'quiz',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Literary Club',
    slug: 'literary',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Masquerades Club',
    slug: 'dramatics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Fine Arts Club (FAC)',
    slug: 'fine-arts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const CulturalCouncil: React.FC = () => {
  return (
    <CouncilPage 
      councilName="Cultural Council"
      councilSlug="cultural"
      councilImages={councilImages}
      aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      positionHolders={positionHolders}
      achievements={achievements}
      clubs={clubs}
      festName="Kashiyatra - North India's One of the Largest Socio-Cultural Fest"
      festImages={festImages}
      festText={festText}
    />
  );
};

export default CulturalCouncil;
