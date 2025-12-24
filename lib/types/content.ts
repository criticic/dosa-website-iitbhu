export interface PositionHolder {
  position: string;
  name: string;
  email: string;
  photo?: string; // Path to photo in /public/assets/people/
}

export interface Counsellor {
  position: "Counsellor" | "Associate Counsellor";
  name: string;
  email: string;
  photo?: string;
}

export interface CommitteeMember {
  name: string;
  email: string;
  photo?: string;
  isConvener?: boolean;
  role?: string; // e.g., "Convenor", "Member"
}

export interface Committee {
  name: string;
  email?: string;
  description?: string;
  members: CommitteeMember[];
}

export interface Club {
  name: string;
  slug: string;
  description: string;
}

export interface CouncilContent {
  councilName: string;
  councilSlug: string;
  councilImages: string[];
  councilImageAspectRatio?: 'square' | 'video' | 'banner';
  counsellors?: Counsellor[];
  counsellorsEmail?: string; // Overall email for counsellors section
  positionHolders: PositionHolder[];
  positionHoldersEmail?: string; // Overall email for position holders section
  clubs: Club[];
  achievements: string[];
  festName?: string;
  festImages?: string[];
  festImageAspectRatio?: 'square' | 'video' | 'banner';
  festText?: string;
  aboutText?: string; // Can come from MDX body
}

export interface ClubContent {
  clubName: string;
  councilName: string;
  clubImages: string[];
  aboutText?: string;
  positionHolders: PositionHolder[];
  positionHoldersEmail?: string; // Overall email for position holders section
  achievements: string[];
  eventName?: string;
  eventImages?: string[];
  eventText?: string;
}

export interface ParliamentContent {
  councilName: string;
  councilSlug: string;
  parliamentImages: string[];
  parliamentImageAspectRatio?: 'square' | 'video' | 'banner';
  leadership: PositionHolder[];
  leadershipEmail?: string; // Overall email for leadership section
  committees: Committee[];
  aboutText?: string;
  initiatives?: Array<{
    title: string;
    description: string;
  }>;
  otherParliamentarians?: Array<{
    name: string;
    email: string;
    photo?: string;
  }>;
}

export interface HomeContent {
  heroImages: string[];
  aboutText?: string;
  facilities?: Array<{
    title: string;
    description: string;
  }>;
}

export interface ImageCarouselConfig {
  images: string[];
  aspectRatio?: 'square' | 'video' | 'banner';
}

export interface Person {
  name: string;
  title?: string;
  designation?: string;
  department?: string;
  email?: string;
  phone?: string;
  fax?: string;
  address?: string;
  sections?: string[];
  photo?: string;
}

export interface PeopleContent {
  dean: Person[];
  associateDean: Person[];
  assistantRegistrar: Person[];
  staff: Person[];
}

