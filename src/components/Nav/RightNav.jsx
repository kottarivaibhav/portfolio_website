import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
}

@media (max-width: 320px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px; /* Adjusted width for smaller screens */
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
}
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#Projects">Projects</a></li>
      <li><a href="#Technology">Technology</a></li>
      <li><a href="#About Me">About Me</a></li>
      <li><a href="#Experiences">Experiences</a></li>
      <li><a href="#Certifications">Certifications</a></li>
      <li><a href="#FeedbackForm">Contact us</a></li>
    </Ul>
  )
}

export default RightNav