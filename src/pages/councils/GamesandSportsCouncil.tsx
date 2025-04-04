import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Games+and+Sports+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Games+and+Sports+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Games+and+Sports+Council+Image+3',
];

const festImages = [
  'https://placehold.co/800x450/97437f/white?text=Spardha+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Spardha+Image+2',
  'https://placehold.co/800x450/723261/white?text=Spardha+Image+3',
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
    name: 'Athletics Club',
    slug: 'athletics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Football Club',
    slug: 'football',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Cricket Club',
    slug: 'cricket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Badminton Club',
    slug: 'badminton',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Basketball Club',
    slug: 'basketball',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Volleyball Club',
    slug: 'volleyball',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Tennis Club',
    slug: 'tennis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Table Tennis Club',
    slug: 'table-tennis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Chess Club',
    slug: 'chess',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Weightlifting Club',
    slug: 'weightlifting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Aquatics Club',
    slug: 'aquatics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const GamesandSportsCouncil: React.FC = () => {
  return (
    <CouncilPage 
      councilName="Games and Sports Council"
      councilSlug="gnsc"
      councilImages={councilImages}
      aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      positionHolders={positionHolders}
      achievements={achievements}
      clubs={clubs}
      festName="Spardha - India's Largest Games & Sports Festival"
      festImages={festImages}
      festText={festText}
    />
  );
};

export default GamesandSportsCouncil;
