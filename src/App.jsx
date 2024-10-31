import React from 'react';
import './App.css';
import SwirlCursorEffect from './components/SwirlCursorEffect';
import Navbar from './components/Nav/Navbar';
import BannerSection from './components/Banner';
import ProjectSection from './components/Project';
import TechSection from './components/Technology';
import AdditionalSkillSection from './components/AdditionalSkill';
import AboutMeSection from './components/AboutSection';
import ExperienceSection from './components/Experience';
import CertificationCarousel from './components/CertificationCarousel'; // Import Carousel Component
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'; // Import ContactForm Component

function App() {
  return (
    <>
      <SwirlCursorEffect />
      <Navbar />
      <div className=''>
        
      <main className="mt-10 sm:mt-8 md:mt-6 lg:mt-4 xl:mt-2 left-4 right-1 sm:left-2 sm:right-0 flex flex-col space-y-4">
          <BannerSection />
          <ProjectSection />
          <TechSection />
          <AdditionalSkillSection />
          <AboutMeSection />
          <ExperienceSection />
          <CertificationCarousel /> {/* Add Carousel Component here */}
          <ContactForm /> {/* Add ContactForm Component here */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;