import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="mt-4 mb-7 mr-1 ml-1 p-6" id="Experiences">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold underline-header text-center">Internship Experience</h2>
        <div className="flex flex-col gap-8 mt-7">
          {/* Experience 1 */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Data Analyst Intern | Edunet Foundation</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-blue-200">Remote - 2 months</p>
              <p className="text-blue-200">December 2023 - Feburary 2024</p>
            </div>
            <p className="text-gray-400">
              During the internship, I worked on a project that involved data analysis and visualization using Python. I learned how to work with large datasets and gained experience in data cleaning, data wrangling, and data visualization. I also developed my problem-solving skills and learned how to work effectively in a team.
            </p>
          </div>
          {/* Experience 2 */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Web Developer Intern | Internpe</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-blue-200">Remote - 2 months</p>
              <p className="text-blue-200">October 2023 - November 2023</p>
            </div>
            <p className="text-gray-400">
              Completed a 1-month internship focusing on web development, utilizing HTML, CSS, and JavaScript. Developed projects including a calculator, to-do list, e-commerce website, and Connect-4 game, gaining practical experience in building functional web applications.
            </p>
          </div>
          {/* Experience 3 */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Artificial Intelligence Intern | Vois Vodafone</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-blue-200">Remote - 2 months</p>
              <p className="text-blue-200">November 2023 - December 2023</p>
            </div>
            <p className="text-gray-400">
              During the internship, I worked on a project and assessment reletated to the field of Artifical Intelligence. I went deep into AI Design Challenges
              Machine Learning Basics, Machine Learning Models ,Building Neural Networks with Keras. As part of the internship the project I worked on was to predict diabetic patients using Machine Learning.
            </p>
          </div>

          {/* Experience 4*/}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">GSSOc'24 Extended Contributor| Open source</h3>
            
            <p className="text-gray-400">
              This was an open source contribution where I had invloved with lot of contibution to many open source projects. My primarily contribution is
              to My-Calender-app where I was done majority of my contribution in this event . I have fixed bugs along with adding new features to the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;