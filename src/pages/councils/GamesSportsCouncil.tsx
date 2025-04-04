import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Games+Sports+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Games+Sports+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Games+Sports+Council+Image+3',
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
    name: 'Athletics',
    slug: 'athletics',
    description: 'Focuses on track and field events, cross country running, and marathon training.'
  },
  {
    name: 'Football',
    slug: 'football',
    description: 'Promotes football through regular practices, tournaments, and friendly matches.'
  },
  {
    name: 'Cricket',
    slug: 'cricket',
    description: 'Organizes cricket training, selection trials, and intra/inter-college matches.'
  },
  {
    name: 'Badminton',
    slug: 'badminton',
    description: 'Provides facilities for badminton practice and conducts tournaments.'
  },
  {
    name: 'Basketball',
    slug: 'basketball',
    description: 'Focuses on developing basketball skills through regular practice sessions and competitions.'
  },
  {
    name: 'Volleyball',
    slug: 'volleyball',
    description: 'Promotes volleyball through training sessions and competitions.'
  },
  {
    name: 'Tennis',
    slug: 'tennis',
    description: 'Organizes tennis coaching, practice sessions, and tournaments.'
  },
  {
    name: 'Table Tennis',
    slug: 'table-tennis',
    description: 'Provides facilities for table tennis and organizes regular tournaments.'
  },
  {
    name: 'Chess',
    slug: 'chess',
    description: 'Promotes strategic thinking through chess tournaments and workshops.'
  },
  {
    name: 'Weightlifting',
    slug: 'weightlifting',
    description: 'Provides training in weightlifting techniques and physical conditioning.'
  },
  {
    name: 'Aquatics',
    slug: 'aquatics',
    description: 'Offers swimming lessons and organizes swimming competitions.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const GamesSportsCouncil: React.FC = () => {
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

export default GamesSportsCouncil;
