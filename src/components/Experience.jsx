// src/components/InternshipExperienceSection.jsx

import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="mt-4 mb-7 mr-3 p-6 " id="Experiences">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold underline-header text-center">Internship Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center mt-7">
            <h3 className="text-xl font-semibold mb-4">Data Analyst Intern | Edunet Foundation</h3>
            <p className="text-blue-200 mb-4">Bangalore, Karnataka (online) - 2 months</p>
            <p className="text-gray-400">
              During the internship, I worked on a project that involved data analysis and visualization using Python. I learned how to work with large datasets and gained experience in data cleaning, data wrangling, and data visualization. I also developed my problem-solving skills and learned how to work effectively in a team.
            </p>
          </div>
          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Web Developer Intern | Internpe</h3>
            <p className="text-blue-200 mb-4">Remote (Online) - 2 months</p>
            <p className="text-gray-400">
              Completed a 1-month internship focusing on web development, utilizing HTML, CSS, and JavaScript. Developed projects including a calculator, to-do list, e-commerce website, and Connect-4 game, gaining practical experience in building functional web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
