import React from 'react';
import './App.css';
import SwirlCursorEffect from './components/SwirlCursorEffect';
import Header from './components/Header';
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
      <div className=''>
        <Header />
        <main className="relative mt-10 justify-normal left-4 right-1">
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
