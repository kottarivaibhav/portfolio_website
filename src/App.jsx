
import './App.css'

import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql,SiMicrosoftazure } from 'react-icons/si';

import profile from './assets/Photo.png'
import profile_small from './assets/small.png'
import project1 from './assets/Project_1.png'
import project2 from './assets/Project_2.png'
import project3 from './assets/Project_3.png'
import Github from './assets/github-mark-white.svg'
import linkedin from './assets/linkedin.svg'
import Instagram from './assets/instagram.svg'




function App() {


  return (
    <>
    <div className='background-move '>
      <header>
        <div className='container m-auto px-5 py-4 '>
          <div className='flex justify-between'>
            <div><h1 className=' font-extrabold  text-2xl '>Vaibhav Kottari's Portfolio</h1></div>
            <div className=' flex justify-between items-center'>
              <ul className=' flex gap-4'>
                <li>
                  <a className='text-white hover:text-black  cursor-pointer ' href='#Projects'>Projects</a>
                </li>
                <li>
                  <a className='text-white hover:text-white  cursor-pointer ' href='#Technology'>Technologies</a>
                </li>
                <li>
                  <a className='text-white hover:text-white  cursor-pointer ' href='#About'>About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mt-10  justify-normal left-4 right-1" >
        {/* Intro Banner section */}
        <section className=' mt-5'>
          <div className=' container m-auto px-10 py-16 flex gap-8 '>
            <div>
              <h2 className=' font-bold text-5xl'>Hello ! I am Vaibhav Kottari</h2>
              <h2 className=' font-bold text-4xl mt-1 gradient-text'>Aspiring Computer Science Engineer</h2>
              <p className='mt-5 text-gray-400'>
                <span className='block'>A Student of Computer Science Engineering at St Joseph Engineering College, Mangalore,</span>
                <span className='block'>who is passionate about Data Science and development. I am always curious to learn new things and explore new technologies.</span>
              </p>
              <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <a href='https://drive.google.com/file/d/141XIq1fIzTFQ9n48vpMmrKcl93Ezpn5d/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                Download resume
                </a>
              </button>
            </div>
            <div className='relative'>
              <img src={profile} alt='profile' width={400} className='relative z-10 py-4' />
              <img src={profile_small} alt='circle' className='absolute top-1 left-75 z-125  bottom-55 ' />
            </div>
          </div>
        </section>
        {/* Project Sections */}
        <section className='mt-4 mr-3 p-6' id='Projects'>
  <div className='container mx-auto px-4'>
    <h2 className="text-4xl font-bold underline-header">Projects</h2>
    <div className='flex flex-col md:flex-row gap-5 mt-5 mr-2'>
      <div className='flex-1 border rounded-md p-5 flex flex-col'>
        <img src={project1} alt='project1' className="w-full h-48 object-cover mb-4" />
        <h3 className="text-2xl font-semibold mt-7">College Event Management System.</h3>
        <p className="text-gray-400 mt-2">This project was part of my DBMS mini project where I developed a system for managing college events. I used HTML, CSS, and JavaScript for the front-end and PHP for the back-end along with MySQL.</p>
        <div className="mt-auto flex mt-12 gap-2">
          <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a href='https://github.com/kottarivaibhav/dbms_mini_project' target='_blank' rel='noopener noreferrer'>Live preview</a>
          </button>
          <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
            <a href='https://github.com/kottarivaibhav/dbms_mini_project' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
          </button>
        </div>
      </div>
      <div className='flex-1 border rounded-md p-5 flex flex-col'>
        <img src={project2} alt='project2' className="w-full h-48 object-cover mb-4" />
        <h3 className="text-2xl font-semibold mt-8">Little Lemon Restaurant</h3>
        <p className="text-gray-400 text-sm mt-2">This was my Capstone Project from Meta Front End Developer Path. I used React Framework for this Project.</p>
        <div className="mt-auto flex mt-12 gap-2">
          <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a href='https://kottarivaibhav.github.io/meta_front_end_developer_capstone/' target='_blank' rel='noopener noreferrer'>Live preview</a>
          </button>
          <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
            <a href='https://github.com/kottarivaibhav/meta_front_end_developer_capstone' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
          </button>
        </div>
      </div>
      <div className='flex-1 border rounded-md p-5 flex flex-col'>
        <img src={project3} alt='project3' className="w-full h-48 object-cover mb-4" />
        <h3 className="text-2xl font-semibold mt-8">Pizza E-commerce</h3>
        <p className="text-gray-400 text-sm mt-2">Responsive HTML/CSS layout for online Pizza ordering website using HTML5, CSS3 (SCSS)</p>
        <div className="mt-auto flex mt-12 gap-2">
          <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a href='https://kottarivaibhav.github.io/Ecommerce_PizzaStore/' target='_blank' rel='noopener noreferrer'>Live Preview</a>
          </button>
          <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
            <a href='#' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Technologies Section */}
<section className='mt-4 mr-3 p-6' id='Technology'>
  <div className='container m-auto px-10 '>
  <h2 className="text-4xl font-bold underline-header">Technologies Known</h2>
  </div>
  <div className='mt-6'>
    <div className='container m-auto px-10'>
      <div className='flex flex-wrap  items-center'>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
            <FaHtml5 className='text-6xl' />
            <span className='mt-2'>HTML</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
            <FaCss3Alt className='text-6xl' />
            <span className='mt-2'>CSS</span>
        </div>
          
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
          <SiTailwindcss className='text-6xl' />
          <span className='mt-2'>Tailwind CSS</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
            <FaReact className='text-6xl' />
            <span className='mt-2'>React</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
            <FaGithub className='text-6xl' />
            <span className='mt-2'>GitHub</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
            <SiJavascript className='text-6xl' />
            <span className='mt-2'>JavaScript</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
            <FaJava className='text-6xl' />
            <span className='mt-2'>Java</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2  custom-icon'>
              <SiMicrosoftazure className='text-6xl' />
              <span className='mt-2'>Azure</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
            <FaPython className='text-6xl' />
            <span className='mt-2'>Python</span>
        </div>
        <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
            <SiMysql className='text-6xl' />
            <span className='mt-2'>MySQL</span>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* Additional skillset section */}
        <section className='mt-4 mr-3 p-6'>
  <div className="container  px-10 py-14">
    <h2 className="text-4xl font-bold underline-header">
      Additional skills
    </h2>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
      <div className="flex-1">
        <p className="skill-item">
          Canva|Illustrator|Photoshop
        </p>
      </div>
      <div className="flex-1">
        <p className="skill-item">
          Communication
        </p>
      </div>
      <div className="flex-1">
        <p className="skill-item">
          Teamwork
        </p>
      </div>
      <div className="flex-1">
        <p className="skill-item">
          Leadership
        </p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
      <div className="flex-1">
        <p className="skill-item">
          MS-Excel
        </p>
      </div>
      <div className="flex-1">
        <p className="skill-item">
          English
        </p>
      </div>
      <div className="flex-1" >
        <p className="skill-item">
          Teambuilding
        </p>
      </div>
      <div className="flex">
        <p className="skill-item">
        Social Media Management
        </p>
      </div>
      
    </div>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
      <div className="flex-1">
        <p className="skill-item">
          Problem Solving
        </p>
      </div>
      <div className="flex-1">
        <p className="skill-item">
          Social Media Creator
        </p>
      </div>
      <div className="flex-1">
        <p className="skill-item">
          Ubuntu/Linux
        </p>
      </div>
    </div>
  </div>
</section>
        
        {/* About Me Section */}
        <section className="mt-4 mr-3 p-6" id='About'>
          <div className="container m-auto px-4">
            <h2 className="text-4xl font-bold underline-header">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">

                <p>
                  I am Vaibhav Ramachandra Kottari. I am from Mangalore, Karnataka. I have spent my childhood in UAE completing my Higher education Day
                  in Leaders Private School , before moving to India.I scored an percentage of <b>93%</b> in my <b>10th grade </b>
                </p> 
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                  I completed my PU education in mangalore in Canara Vikaas PU college , Maryhill, Mangalore(then known as Vikas PU College).
                  I pursued PCMC, from where I developed my Interest for Computer Science. I scored an percentage of <b>96% in my 12th grade.</b>
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                  I then Joined <b>St Joseph Engineering College , Mangalore </b> where I am pursuing Computer Science Engineering .I am currently in my 3rd Year of my
                  engineerning course.Over the period of time I have developed my interest in Data Science and Development.As part of my college Life I have
                  been part of various clubs and have taken part in various events.I have was the Graphic Designer of AICUF,SJEC. After I left AICUF , I joined another
                  club of our college known as Innoventure where I am currently working in the media team.
                </p>
              </div>

              

            </div>
          </div>
        </section>
        
        {/* Internship Experience Section */}
        <section className="mt-4 mb-7 mr-3 p-6">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold underline-header">Internship Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="flex flex-col justify-center mt-7">
                <h3 className="text-xl font-semibold mb-4">Data Analyst Intern | Edunet Foundation</h3>
                <p className="text-blue-200 mb-4">Bangalore,Kanataka(online)- 2month</p>
                <p className=" text-gray-400">
                  During the internship, I worked on a project that involved data analysis and visualization using Python . I learned how to work with large datasets and gained experience in data cleaning, data wrangling, and data visualization. I also developed my problem-solving skills and learned how to work effectively in a team.
                </p>
              </div>
              {/* Right Column (You can add more internship experiences in the same format) */}
              <div className="flex flex-col justify-center ">
                <h3 className="text-xl font-semibold mb-4">Web Developer Intern | Internpe</h3>
                <p className="text-blue-200 mb-4">Remote(Online)- 2month</p>
                <p className=" text-gray-400">
                Completed a 1-month internship focusing on web development, utilizing HTML, CSS, and JavaScript. Developed projects including a calculator, to-do list, e-commerce website, and Connect-4 game, gaining practical experience in building functional web applications.
                </p>
              </div>
            </div>
          </div>
        </section>
     
      </main>
      <footer>
  <div className='container m-auto flex flex-col items-center p-25 mb-'>
    <div>
      <p className=''></p>
    </div>
    <div className='text-center'>
      
      <p className='text-sm'></p>
    </div>
    <ul className='flex gap-4 mt-2 mb-1'>
      <li>
        <a href='https://github.com/kottarivaibhav' target="_blank" rel="noopener noreferrer">
          <img src={Github} className='w-10' />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/__vaibhavkottari__?utm_source=qr' target="_blank" rel="noopener noreferrer">
          <img src={Instagram} className='w-10' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/vaibhav-kottari/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className='w-10' />
        </a>
      </li>
    </ul>
    <p className='text-2xl font-mono'>Copyright @ 2024||Designed by Vaibhav Ramachandra Kottari</p>
  </div>
</footer>
      </div>
    </>
  )
}

export default App
