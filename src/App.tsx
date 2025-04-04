import './App.css'
import iitbhuLogo from './assets/iitbhu-logo.png'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { PiList, PiX, PiArrowSquareOut, PiCaretDown, PiCaretUp } from 'react-icons/pi'

// Import page components
import Home from './pages/Home'
import People from './pages/People'
import News from './pages/News'
import Antiragging from './pages/Antiragging'
import Gallery from './pages/Gallery'

// Import council pages
import StudentsBody from './pages/councils/StudentsBody'
import CulturalCouncil from './pages/councils/CulturalCouncil'
import FilmMediaCouncil from './pages/councils/FilmMediaCouncil'
import GamesSportsCouncil from './pages/councils/GamesSportsCouncil'
import ScienceTechCouncil from './pages/councils/ScienceTechCouncil'
import SocialServiceCouncil from './pages/councils/SocialServiceCouncil'

// ======= CULTURAL COUNCIL CLUB IMPORTS =======
import DanceFreakzClubDFZ from './pages/clubs/cultural/DanceFreakzClubDFZ';
import IndianMusicClub from './pages/clubs/cultural/IndianMusicClub';
import WesternMusicClub from './pages/clubs/cultural/WesternMusicClub';
import QuizClub from './pages/clubs/cultural/QuizClub';
import LiteraryClub from './pages/clubs/cultural/LiteraryClub';
import MasqueradesClub from './pages/clubs/cultural/MasqueradesClub';
import FineArtsClubFAC from './pages/clubs/cultural/FineArtsClubFAC';

// ======= FILM & MEDIA COUNCIL CLUB IMPORTS =======
import CineClub from './pages/clubs/fmc/CineClub';
import AnimationClub from './pages/clubs/fmc/AnimationClub';
import DesignClub from './pages/clubs/fmc/DesignClub';
import MediaClub from './pages/clubs/fmc/MediaClub';
import PhotographyClub from './pages/clubs/fmc/PhotographyClub';
import OutreachClub from './pages/clubs/fmc/OutreachClub';

// ======= GAMES & SPORTS COUNCIL CLUB IMPORTS =======
import AthleticsClub from './pages/clubs/gnsc/AthleticsClub';
import FootballClub from './pages/clubs/gnsc/FootballClub';
import CricketClub from './pages/clubs/gnsc/CricketClub';
import BadmintonClub from './pages/clubs/gnsc/BadmintonClub';
import BasketballClub from './pages/clubs/gnsc/BasketballClub';
import VolleyballClub from './pages/clubs/gnsc/VolleyballClub';
import TennisClub from './pages/clubs/gnsc/TennisClub';
import TableTennisClub from './pages/clubs/gnsc/TableTennisClub';
import ChessClub from './pages/clubs/gnsc/ChessClub';
import WeightliftingClub from './pages/clubs/gnsc/WeightliftingClub';
import AquaticsClub from './pages/clubs/gnsc/AquaticsClub';

// ======= SCIENCE & TECHNOLOGY COUNCIL CLUB IMPORTS =======
import ClubofProgrammersCOPS from './pages/clubs/sntc/ClubofProgrammersCOPS';
import AeroModellingClub from './pages/clubs/sntc/AeroModellingClub';
import AstronomyClub from './pages/clubs/sntc/AstronomyClub';
import BusinessClub from './pages/clubs/sntc/BusinessClub';
import SAESocietyofAutomotiveEngineers from './pages/clubs/sntc/SAESocietyofAutomotiveEngineers';
import RoboticsClub from './pages/clubs/sntc/RoboticsClub';

// ======= SOCIAL SERVICE COUNCIL CLUB IMPORTS =======
import SahyogClub from './pages/clubs/ssc/SahyogClub';
import SocialProjectsClub from './pages/clubs/ssc/SocialProjectsClub';
import KashiUtkarsh from './pages/clubs/ssc/KashiUtkarsh';
import HealthandHygieneClub from './pages/clubs/ssc/HealthandHygieneClub';

// Council submenu items
const councilItems = [
  { label: "Student's Body", path: '/councils/parliament' },
  { label: 'Cultural Council', path: '/councils/cultural' },
  { label: 'Film and Media Council', path: '/councils/fmc' },
  { label: 'Games and Sports Council', path: '/councils/gnsc' },
  { label: 'Science and Technology Council', path: '/councils/sntc' },
  { label: 'Social Service Council', path: '/councils/ssc' }
];

// SubNavbar component for councils
const CouncilsSubNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Find the current active council (if any)
  const currentCouncil = councilItems.find(item => item.path === pathname);
  
  return (
    <div className="bg-[#833a6f] shadow-md">
      <div className="container mx-auto px-2 py-2">
        {/* Mobile View - Collapsible Menu */}
        <div className="md:hidden">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="text-white font-medium">
              {currentCouncil ? currentCouncil.label : "Council Navigation"}
            </div>
            <div className="text-white p-1 rounded hover:bg-[#723261]">
              {isExpanded ? <PiCaretUp className="w-5 h-5" /> : <PiCaretDown className="w-5 h-5" />}
            </div>
          </div>
          
          {/* Collapsible Menu Items */}
          {isExpanded && (
            <div className="mt-2 space-y-1 border-t border-[#723261] pt-2">
              {councilItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsExpanded(false)}
                  className={`px-3 py-2 text-white hover:bg-[#723261] hover:text-yellow-100 rounded transition-colors flex items-center ${
                    pathname === item.path ? 'bg-[#723261] font-medium text-yellow-100' : ''
                  }`}
                >
                  <div className="w-1 h-4 bg-yellow-200 rounded-full mr-2"></div>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {councilItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-3 py-1.5 text-white hover:bg-[#723261] hover:text-yellow-100 rounded transition-colors flex items-center ${
                  pathname === item.path ? 'bg-[#723261] font-medium text-yellow-100' : ''
                }`}
              >
                <div className="w-1 h-4 bg-yellow-200 rounded-full mr-2"></div>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar component with active link detection
const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items mapping: label, path
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Councils', path: '/councils' },
    { label: 'People', path: '/people' },
    { label: 'News', path: '/news' },
    { label: 'Antiragging', path: '/antiragging' },
    { label: 'Gallery', path: '/gallery' },
    { 
      label: 'IIT(BHU)', 
      path: 'https://iitbhu.ac.in', 
      isExternal: true 
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if currently in a council section
  const isInCouncilSection = pathname.startsWith('/councils');

  return (
    <header>
      <nav className="bg-[#97437f] text-white shadow-lg">
        <div className="container mx-auto px-2 py-3">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            {/* Logo and Institute Name */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link to="/">
                  <img src={iitbhuLogo} alt="IIT BHU Logo" className="h-14 md:h-16" />
                </Link>
                <div>
                  <Link to="/">
                    <h1 className="text-lg md:text-xl font-bold hover:text-yellow-200">Dean, Student's Affairs</h1>
                    <p className="text-xs md:text-sm">Indian Institute of Technology (BHU) Varanasi</p>
                  </Link>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <PiX className="w-6 h-6" />
                ) : (
                  <PiList className="w-6 h-6" />
                )}
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-1.5 xl:space-x-2">
                {navItems.map((item) => (
                  item.isExternal ? (
                    <a 
                      key={item.label}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-center w-full lg:w-auto hover:bg-[#833a6f] hover:text-yellow-200 rounded-sm transition-colors flex items-center justify-center"
                    >
                      {item.label}
                      <PiArrowSquareOut className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link 
                      key={item.label}
                      to={item.path === '/councils' && isInCouncilSection ? '#' : item.path}
                      onClick={() => {
                        if (item.path === '/councils' && !isInCouncilSection) {
                          // Redirect to first council if clicking on Councils
                          window.location.href = councilItems[0].path;
                        }
                        setIsMenuOpen(false);
                      }}
                      className={`px-2 py-2 text-center w-full lg:w-auto hover:bg-[#833a6f] hover:text-yellow-200 rounded-sm transition-colors ${
                        (pathname === item.path || (item.path === '/councils' && isInCouncilSection))
                          ? 'font-bold border-b-2 border-yellow-300 bg-[#833a6f]' 
                          : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Show Council SubNav when in council section */}
      {isInCouncilSection && <CouncilsSubNav />}
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-[Montserrat]">
        <Navbar />
        
        {/* Page Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/news" element={<News />} />
            <Route path="/antiragging" element={<Antiragging />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/councils/parliament" element={<StudentsBody />} />
            <Route path="/councils/cultural" element={<CulturalCouncil />} />
            <Route path="/councils/fmc" element={<FilmMediaCouncil />} />
            <Route path="/councils/gnsc" element={<GamesSportsCouncil />} />
            <Route path="/councils/sntc" element={<ScienceTechCouncil />} />
            <Route path="/councils/ssc" element={<SocialServiceCouncil />} />
            
            {/* ======= CULTURAL COUNCIL CLUB ROUTES ======= */}
            <Route path="/councils/cultural/clubs/dance" element={<DanceFreakzClubDFZ />} />
            <Route path="/councils/cultural/clubs/indian-music" element={<IndianMusicClub />} />
            <Route path="/councils/cultural/clubs/western-music" element={<WesternMusicClub />} />
            <Route path="/councils/cultural/clubs/quiz" element={<QuizClub />} />
            <Route path="/councils/cultural/clubs/literary" element={<LiteraryClub />} />
            <Route path="/councils/cultural/clubs/dramatics" element={<MasqueradesClub />} />
            <Route path="/councils/cultural/clubs/fine-arts" element={<FineArtsClubFAC />} />
            
            {/* ======= FILM & MEDIA COUNCIL CLUB ROUTES ======= */}
            <Route path="/councils/fmc/clubs/cine" element={<CineClub />} />
            <Route path="/councils/fmc/clubs/animation" element={<AnimationClub />} />
            <Route path="/councils/fmc/clubs/design" element={<DesignClub />} />
            <Route path="/councils/fmc/clubs/media" element={<MediaClub />} />
            <Route path="/councils/fmc/clubs/photography" element={<PhotographyClub />} />
            <Route path="/councils/fmc/clubs/outreach" element={<OutreachClub />} />
            
            {/* ======= GAMES & SPORTS COUNCIL CLUB ROUTES ======= */}
            <Route path="/councils/gnsc/clubs/athletics" element={<AthleticsClub />} />
            <Route path="/councils/gnsc/clubs/football" element={<FootballClub />} />
            <Route path="/councils/gnsc/clubs/cricket" element={<CricketClub />} />
            <Route path="/councils/gnsc/clubs/badminton" element={<BadmintonClub />} />
            <Route path="/councils/gnsc/clubs/basketball" element={<BasketballClub />} />
            <Route path="/councils/gnsc/clubs/volleyball" element={<VolleyballClub />} />
            <Route path="/councils/gnsc/clubs/tennis" element={<TennisClub />} />
            <Route path="/councils/gnsc/clubs/table-tennis" element={<TableTennisClub />} />
            <Route path="/councils/gnsc/clubs/chess" element={<ChessClub />} />
            <Route path="/councils/gnsc/clubs/weightlifting" element={<WeightliftingClub />} />
            <Route path="/councils/gnsc/clubs/aquatics" element={<AquaticsClub />} />
            
            {/* ======= SCIENCE & TECHNOLOGY COUNCIL CLUB ROUTES ======= */}
            <Route path="/councils/sntc/clubs/cops" element={<ClubofProgrammersCOPS />} />
            <Route path="/councils/sntc/clubs/aero" element={<AeroModellingClub />} />
            <Route path="/councils/sntc/clubs/astronomy" element={<AstronomyClub />} />
            <Route path="/councils/sntc/clubs/business" element={<BusinessClub />} />
            <Route path="/councils/sntc/clubs/sae" element={<SAESocietyofAutomotiveEngineers />} />
            <Route path="/councils/sntc/clubs/robotics" element={<RoboticsClub />} />
            
            {/* ======= SOCIAL SERVICE COUNCIL CLUB ROUTES ======= */}
            <Route path="/councils/ssc/clubs/sahyog" element={<SahyogClub />} />
            <Route path="/councils/ssc/clubs/social-projects" element={<SocialProjectsClub />} />
            <Route path="/councils/ssc/clubs/kashi-utkarsh" element={<KashiUtkarsh />} />
            <Route path="/councils/ssc/clubs/health-hygiene" element={<HealthandHygieneClub />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;