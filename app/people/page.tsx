import { getPeopleContent } from '@/lib/content';
import PeoplePageComponent from '@/components/PeoplePage';

export default function PeoplePage() {
  const content = getPeopleContent();

  return <PeoplePageComponent content={content} />;
}


