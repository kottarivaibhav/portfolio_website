// src/components/AdditionalSkillsSection.jsx

import React from 'react';

const AdditionalSkillSection = () => {
  return (
    <section className='mt-4 mb-7 p-6'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold underline-header text-center mb-8">Additional Skills</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <div className="flex items-center justify-center">
            <p className="skill-item">Canva | Illustrator | Photoshop</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">Communication</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">Teamwork</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">Leadership</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">MS-Excel</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">Social Media</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">Problem Solving</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="skill-item">Social Media Creator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkillSection;
