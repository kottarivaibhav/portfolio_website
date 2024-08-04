// src/components/AdditionalSkillsSection.jsx

import React from 'react';

const AdditionalSkillSection = () => {
  return (
    <section className='mt-4 mr-3 p-6'>
      <div className="container px-10 py-14">
        <h2 className="text-4xl font-bold underline-header">Additional skills</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
          <div className="flex-1">
            <p className="skill-item">Canva|Illustrator|Photoshop</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">Communication</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">Teamwork</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">Leadership</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
          <div className="flex-1">
            <p className="skill-item">MS-Excel</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">English</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">Teambuilding</p>
          </div>
          <div className="flex">
            <p className="skill-item">Social Media Management</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
          <div className="flex-1">
            <p className="skill-item">Problem Solving</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">Social Media Creator</p>
          </div>
          <div className="flex-1">
            <p className="skill-item">Ubuntu/Linux</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkillSection;
