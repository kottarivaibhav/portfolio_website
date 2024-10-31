import React from 'react';
import Slider from 'react-slick';
import certification1 from '../assets/certificate_1.png';
import certification2 from '../assets/certificate_2.png';
import certification3 from '../assets/certificate_3.png';
import certification4 from '../assets/certificate_4.png'; 
import certification5 from '../assets/cybersecurity.png';
import certification6 from '../assets/Github.png';
import certification7 from '../assets/api.jpg';
import certification8 from '../assets/marketing.png';

const certifications = [
  {
    img: certification1,
    title: 'Meta Front End Developer Certificate',
    description: 'I developed responsive websites using HTML, CSS, and JavaScript, mastering React, Bootstrap, and GitHub version control. This experience enhanced my skills in UI/UX design and web development, preparing me to create user-friendly web applications and portfolio-ready projects for coding interviews.',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/J9H3E9WSM7TK'
  },
  {
    img: certification2,
    title: 'IBM Data Analyst Certificate',
    description: 'I earned the IBM Professional Certificate after completing 9 courses on Data Analytics, mastering tools like Excel, SQL, Python, and Cognos Analytics. This certification provided hands-on experience with data manipulation, analysis, and visualization, equipping me with skills for an entry-level role in data analytics.',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/ZG4ZE65NRBL3'
  },
  {
    img: certification3,
    title: 'Google Cloud Digital Leader Training',
    description: 'The Google Cloud Digital Leader training enhanced my understanding of cloud computing and Google Cloud, equipping me to make informed cloud-related business decisions. The courses covered digital transformation, data innovation, infrastructure modernization, and cloud security.',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/SZJ8WSY33VHE'
  },
  {
    img: certification4,
    title: 'Microsoft Excel Basic to Advance',
    description: 'In this course, I learned essential Excel equations, shortcuts, and hands-on techniques, including creating analytical dashboards and data filtration. I gained practical skills in conditional formatting, data validation, and chart creation, which has equipped me with all the essentials of MS-Excel  ',
    link: 'https://www.udemy.com/certificate/UC-3f15e2df-6ea5-4781-b95c-0ef934badc5c/'
  },
  {
    img: certification5,
    title: 'Cybersecurity Fundamentals',
    description: 'In this course, In this course I have learned the fundamentals of cybersecuity, including the concepts of confidentiality, integrity, and availability. I have also learned about the different types of cyber attacks and how to protect against them. ',
    link: 'https://www.linkedin.com/learning/certificates/b4738c38bcfb21cc99ba35b12f56e13e72dc03cd8345f1a7994565831bd4c0e3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BVXYax5syR9ekr0wA3O7K7Q%3D%3D'
    
  },
  {
    img: certification6,
    title: 'Github Foundation Certified',
    description: 'I have passed this exam and certfifed myself in the Github Foundation. I have learned the basics of Github and how to use it for version control. I have also learned how to collaborate with others using Github. ',
    link: 'https://www.credly.com/badges/8718f1b0-0250-4082-83f8-58388eae85b3/linked_in_profile'
  },
  {
    img: certification7,
    title: 'Postman API Fundamentals',
    description: 'In this course, I have learned the fundamentals of API testing using Postman. I have learned how to create requests, write test scripts, and run collections. I have also learned how to use Postman for API documentation and monitoring. ',
    link: 'https://api.badgr.io/public/assertions/GFTyh7FNT_2fcahIkycBDQ?identity__email=kottarivaibhav%40gmail.com'
  },
  {
    img: certification8,
    title: 'Linkedin Certified Marketing',
    description: 'In this course, I have learned the fundamentals of marketing on Linkedin. I have learned how to create a marketing strategy, build a brand presence, and engage with followers. I have also learned how to use Linkedin analytics to track performance and optimize campaigns. ',
    link: 'https://www.udemy.com/certificate/UC-3f15e2df-6ea5-4781-b95c-0ef934badc5c/'
  }
];

const CertificationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
  };

  return (
    <section className='mt-4 p-6 items-center' id='Certifications'>
      <div className='container mx-auto px-4'>
      <h2 className="text-4xl font-bold underline-header text-center mb-4">Certifications</h2>
        <Slider {...settings}>
          {certifications.map((cert, index) => (
            <div key={index} className='flex flex-col items-center border rounded-md glow-effect align-middle'>
              <img src={cert.img} alt={cert.title} className=" mr-10 ml-40 w-80  mb-4" />
              <div className="flex flex-col justify-between h-full p-4">
                <div>
                  <h3 className="text-2xl font-semibold text-center">{cert.title}</h3>
                  <p className="text-gray-700 mt-2">{cert.description}</p>
                </div>
                <div className="flex justify-center mt-4">
  <button className="bg-gradient-to-r from-white to-blue-500 text-blue-700 font-semibold py-2 px-6 rounded-full shadow-xl hover:from-blue-500 hover:to-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 transform hover:scale-105">
    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">View Certification</a>
  </button>
</div>

              </div>
            </div>

          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CertificationCarousel;
