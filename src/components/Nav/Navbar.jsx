import React from 'react';
import styled from 'styled-components';
import Burger from './Burger'; // Assuming you have a Burger component for the menu icon

const HeaderContainer = styled.header`
  width: 100%;
  height: 55px;
  background-color: #7ce0fc; /* Set background color */
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  position: sticky; /* Make the header sticky */
  top: 0; /* Stick to the top of the viewport */
  z-index: 1000; /* Ensure it stays above other content */
  font-family: 'Arial, sans-serif'; /* Set font family */
  font-size: 16px; /* Set font size */
  color: #333; /* Set font color */

  .logo {
    padding: 15px 0;
    font-size: 1.5rem; /* Adjust font size */
    font-weight: bold; /* Make the logo text bold */
    color: #333; /* Set logo text color */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <h1>Portfolio Website</h1>
      </div>
      <Burger />
    </HeaderContainer>
  );
};

export default Header;