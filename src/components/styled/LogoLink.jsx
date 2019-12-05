import React from 'react';
import styled from 'styled-components';
import logo from '../../images/Logo.png';

const LogoLink = () => {
  return (
    <a href="https://www.aviasales.ru/">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default styled(LogoLink)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  width: 200px;
  background: red;
`;
