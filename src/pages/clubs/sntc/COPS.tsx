import React from 'react';
import ClubPage, { ClubPositionHolder } from '../../../components/ClubPage';

// Placeholder images
const clubImages = [
  'https://placehold.co/800x450/97437f/white?text=COPS+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=COPS+Image+2',
  'https://placehold.co/800x450/723261/white?text=COPS+Image+3',
];

const eventImages = [
  'https://placehold.co/800x450/97437f/white?text=COPS+Hackathon+Image+1',
  'https://placehold.co/800x450/833a6f/white?text=COPS+Hackathon+Image+2',
  'https://placehold.co/800x450/723261/white?text=COPS+Hackathon+Image+3',
];

const positionHolders: ClubPositionHolder[] = [
  {
    position: 'Secretary',
    name: 'Lorem Ipsum',
    email: 'secretary.cops@example.com'
  },
  {
    position: 'Joint Secretary',
    name: 'Lorem Ipsum',
    email: 'jointsec1.cops@example.com'
  },
  {
    position: 'Joint Secretary',
    name: 'Lorem Ipsum',
    email: 'jointsec2.cops@example.com'
  }
];

const achievements = [
  'Conducted successful hackathons with participation from over 500 students',
  'Organized technical workshops on various programming languages and frameworks',
  'Developed and maintained numerous institute websites and applications',
  'Secured top positions in national and international coding competitions',
  'Facilitated placement training and mentorship for students'
];

const eventText = `The COPS Hackathon is an annual 24-hour coding marathon that brings together programmers, designers, and problem solvers from all over the country.

Participants work in teams to develop innovative solutions to real-world problems. The event features mentorship from industry professionals, workshops, and exciting prizes for the winning teams.

The hackathon provides a platform for students to showcase their technical skills, learn from peers, and network with industry experts.`;

const COPSClub: React.FC = () => {
  return (
    <ClubPage 
      clubName="Club of Programmers (COPS)"
      councilName="Science and Technology Council"
      clubImages={clubImages}
      aboutText="The Club of Programmers (COPS) is a student-run organization at IIT (BHU) Varanasi that aims to promote programming culture on campus. The club conducts workshops, competitions, and provides mentorship to students interested in programming and software development. COPS is responsible for developing and maintaining various institute websites and applications. The club also organizes annual hackathons and coding competitions."
      positionHolders={positionHolders}
      achievements={achievements}
      eventName="COPS Hackathon"
      eventImages={eventImages}
      eventText={eventText}
    />
  );
};

export default COPSClub;
