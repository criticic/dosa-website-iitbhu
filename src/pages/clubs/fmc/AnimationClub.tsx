import React from 'react';
import ClubPage, { ClubPositionHolder } from '../../../components/ClubPage';

// Placeholder images
const clubImages = [
  'https://placehold.co/800x450/97437f/white?text=Animation+Club+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Animation+Club+Image+2',
  'https://placehold.co/800x450/723261/white?text=Animation+Club+Image+3',
];

const eventImages = [
  'https://placehold.co/800x450/97437f/white?text=Animation+Exhibition+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=Animation+Exhibition+Image+2',
  'https://placehold.co/800x450/723261/white?text=Animation+Exhibition+Image+3',
];

const positionHolders: ClubPositionHolder[] = [
  {
    position: 'Secretary',
    name: 'Lorem Ipsum',
    email: 'secretary.animation@example.com'
  },
  {
    position: 'Joint Secretary',
    name: 'Lorem Ipsum',
    email: 'jointsec1.animation@example.com'
  },
  {
    position: 'Joint Secretary',
    name: 'Lorem Ipsum',
    email: 'jointsec2.animation@example.com'
  }
];

const achievements = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  'Duis aute irure dolor in reprehenderit in voluptate velit.',
  'Excepteur sint occaecat cupidatat non proident.'
];

const eventText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

The event provides a platform for students to showcase their skills and learn from peers. It attracts participants from across the country and creates opportunities for collaboration and growth.

Workshops, masterclasses, and interactive sessions are also conducted as part of the event to help participants enhance their skills and knowledge.`;

const AnimationClub: React.FC = () => {
  return (
    <ClubPage 
      clubName="Animation Club"
      councilName="Film and Media Council"
      clubImages={clubImages}
      aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      positionHolders={positionHolders}
      achievements={achievements}
      eventName="Animation Exhibition"
      eventImages={eventImages}
      eventText={eventText}
    />
  );
};

export default AnimationClub;
