import React from 'react';
import Slider from 'react-slick';
import certification1 from '../assets/certificate_1.png';
import certification2 from '../assets/certificate_2.png';
import certification3 from '../assets/certificate_3.png';
import certification4 from '../assets/certificate_4.png'; 

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
    description: 'In this course, I learned essential Excel equations, shortcuts, and hands-on techniques, including creating analytical dashboards and data filtration. I gained practical skills in conditional formatting, data validation, and chart creation, all without needing prior knowledge.',
    link: 'https://www.udemy.com/certificate/UC-3f15e2df-6ea5-4781-b95c-0ef934badc5c/'
  }
];

const CertificationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
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
            <div key={index} className='flex flex-col items-center border rounded-md glow-effect'>
              <img src={cert.img} alt={cert.title} className=" mr-10 ml-40 w-80  mb-4" />
              <div className="flex flex-col justify-between h-full p-4">
                <div>
                  <h3 className="text-2xl font-semibold text-center">{cert.title}</h3>
                  <p className="text-gray-700 mt-2">{cert.description}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <a href={cert.link} target='_blank' rel='noopener noreferrer' className="text-blue-500 hover:underline">View Certification</a>
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
