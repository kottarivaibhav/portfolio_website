// src/components/AboutMeSection.jsx

import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="mt-4 mr-3 p-6" id="About">
      <div className="container m-auto px-4">
        <h2 className="text-4xl font-bold underline-header text-center">About me</h2>
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <p>
              I am Vaibhav Ramachandra Kottari. I am from Mangalore, Karnataka. I have spent my childhood in UAE completing my Higher education Day
              in Leaders Private School, before moving to India. I scored a percentage of <b>93%</b> in my <b>10th grade</b>.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
            <p>
              I completed my PU education in Mangalore at Canara Vikaas PU College, Maryhill, Mangalore (then known as Vikas PU College).
              I pursued PCMC, from where I developed my interest in Computer Science. I scored a percentage of <b>96% in my 12th grade</b>.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
            <p>
              I then joined <b>St Joseph Engineering College, Mangalore</b> where I am pursuing Computer Science Engineering. I am currently in my 3rd year of my
              engineering course. Over the period of time, I have developed my interest in Data Science and Development. As part of my college life, I have
              been part of various clubs and have taken part in various events. I was the Graphic Designer of AICUF, SJEC. After I left AICUF, I joined another
              club of our college known as Innoventure where I am currently working in the media team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
