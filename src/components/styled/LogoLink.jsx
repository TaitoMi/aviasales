import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../../images/Logo.png';

const Img = ({ className }) => {
  return <img className={className} src={logo} alt="logo" />;
};

const LogoImg = styled(Img)`
  @media screen and (max-width: 769px) {
    width: 120px;
  }
`;

const LogoLink = () => {
  return (
    <a href="https://www.aviasales.ru/">
      <LogoImg />
    </a>
  );
};

export default styled(LogoLink)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  width: 200px;
`;

Img.defaultProps = {
  className: '',
};

Img.propTypes = {
  className: PropTypes.string,
};
