
import './App.css'
import Header from './components/Header';
import BannerSection from './components/Banner';
import ProjectSection from './components/Project';
import TechSection from './components/Technology';
import AdditionalSkillSection from './components/AdditionalSkill';
import AboutMeSection from './components/AboutSection';
import ExperienceSection from './components/Experience';
import Footer from './components/Footer';


function App() {


  return (
    <>
    <div className=''>
    {/* Nav bar section*/}  
    <Header />

      <main className="relative mt-10  justify-normal left-4 right-1" >
        {/* Intro Banner section */}
        <BannerSection />
        {/* Project Sections */}
        <ProjectSection />
        {/* Technologies Section */}
        <TechSection />
        {/* Additional skillset section */}
        <AdditionalSkillSection />
        {/* About Me Section */}
        <AboutMeSection />
        {/* Internship Experience Section */}
        <ExperienceSection />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
