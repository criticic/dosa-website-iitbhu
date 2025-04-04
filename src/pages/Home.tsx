import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

// Placeholder images for carousel
const heroImages = [
  'https://placehold.co/1200x500/97437f/white?text=IIT+BHU+Campus+Image+1',
  'https://placehold.co/1200x500/833a6f/white?text=Student+Activities+Image+2',
  'https://placehold.co/1200x500/723261/white?text=Campus+Life+Image+3',
];

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Carousel */}
      <ImageCarousel images={heroImages} aspectRatio="banner" />
      
      {/* Welcome Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About the Dean of Student's Affairs
        </h2>
        <p className="text-gray-600 mb-4">
        The Dean (Students' Affairs) is the coordinating authority for all student activities at IIT (BHU), and is responsible for the general welfare of the students at the Institute. The DoSA is also the ex-officio President of the Students' Parliament and the Chief Counsellor of the IIT (BHU) Gymkhana. As the President of the Students' Parliament, the DoSA oversees the general functioning of the legislative body, and appoints elected representatives to the offices of the Vice President, the Assistant Vice President, and the Conveners of various parliamentary committees, who report to the DoSA on all matters concerning the Parliament. The DoSA, as the Chief Counsellor of the Students' Gymkhana, supervises the working of its executive wing, and appoints the Counsellors, the General Secretaries, and the Joint General Secretaries for each of the Councils, along with the Conveners of the Institute Festivals. All the student activities are organized in coordination with the Secretaries and the Joint Secretaries of the various Clubs under the respective Councils, and the Heads of the various Teams under each Institute Festival. The Dean (Students' Affairs) also looks after the matters of student welfare, including hostel affairs, and takes care of the needs of students requiring any special attention.
        </p>
      </section>
      
      {/* About Gymkhana Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          About the IIT (BHU) Gymkhana
        </h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Donec in efficitur leo. Proin gravida dignissim sodales. Ut semper vulputate efficitur. 
          Cras condimentum mauris a lorem vulputate, ac tempus tellus ornare. Etiam tempus egestas mi 
          id congue. In hac habitasse platea dictumst.
        </p>
        <p className="text-gray-600">
          Praesent tempor nunc vitae nulla posuere, vel dictum lorem accumsan. Vestibulum vel dolor eget 
          ipsum semper lacinia in ut dolor. Proin vitae nibh quis tortor volutpat placerat vel ac enim. 
          Phasellus porttitor ac turpis vitae dictum. Sed faucibus risus eget mi interdum pharetra. 
          Curabitur ligula neque, tristique at dignissim sit amet, finibus et felis.
        </p>
      </section>
      
      {/* Facilities Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#97437f] pb-2">
          Facilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Facility 1 */}
          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Student Activity Center</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit eu magna 
              posuere blandit. Quisque eget ultricies sem, ut vulputate metus. Nam vehicula justo 
              vel enim ultrices, eget tempor tortor bibendum.
            </p>
          </div>
          
          {/* Facility 2 */}
          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Student Activity Center</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit eu magna 
              posuere blandit. Quisque eget ultricies sem, ut vulputate metus. Nam vehicula justo 
              vel enim ultrices, eget tempor tortor bibendum.
            </p>
          </div>
          
          {/* Facility 3 */}
          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Student Activity Center</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit eu magna 
              posuere blandit. Quisque eget ultricies sem, ut vulputate metus. Nam vehicula justo 
              vel enim ultrices, eget tempor tortor bibendum.
            </p>
          </div>
          
          {/* Facility 4 */}
          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="text-lg font-medium text-[#97437f] mb-2">Student Activity Center</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit eu magna 
              posuere blandit. Quisque eget ultricies sem, ut vulputate metus. Nam vehicula justo 
              vel enim ultrices, eget tempor tortor bibendum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
