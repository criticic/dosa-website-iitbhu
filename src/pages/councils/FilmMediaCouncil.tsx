import React from 'react';
import CouncilPage, { PositionHolder, Club } from '../../components/CouncilPage';

// Placeholder images
const councilImages = [
  'https://placehold.co/800x450/97437f/white?text=Film+Media+Council+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Film+Media+Council+Image+2',
  'https://placehold.co/800x450/723261/white?text=Film+Media+Council+Image+3',
];

const totalFestImages = 10;
const festImages = Array.from({ length: totalFestImages }, (_, index) => {
  return `/fest-images/fmcw24_images/fmcw${index + 1}.jpg`;
});

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
    description: 'Promotes film appreciation and organizes film screenings and discussions.'
  },
  {
    name: 'Animation Club',
    slug: 'animation',
    description: 'Fosters skills in animation and motion graphics through workshops and projects.'
  },
  {
    name: 'Design Club',
    slug: 'design',
    description: 'Focuses on graphic design, UI/UX, and visual communication.'
  },
  {
    name: 'Media Club',
    slug: 'media',
    description: 'Handles coverage and promotion of institute events across various platforms.'
  },
  {
    name: 'Photography Club',
    slug: 'photography',
    description: 'Nurtures photography skills through photo walks, competitions, and exhibitions.'
  },
  {
    name: 'Outreach Club',
    slug: 'outreach',
    description: 'Manages external communications and public relations for the institute.'
  }
];

const festText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const FilmMediaCouncil: React.FC = () => {
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

export default FilmMediaCouncil;
