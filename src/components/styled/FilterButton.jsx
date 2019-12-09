import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ className, children, filterShow }) => {
  return (
    <button type="button" onClick={filterShow} className={className}>
      {children}
    </button>
  );
};

export default styled(Btn)`
  position: fixed;
  width: 150px;
  height: 50px;
  border: none;
  background: #2196f3;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  z-index: 11;
  border-radius: 50px;
  letter-spacing: 2.5px;
  cursor: pointer;
  left: 50%;
  bottom: -40vh;
  transform: translateX(-50%);
  &:hover {
    border: 1px solid #2196f3;
    color: #2196f3;
    background: #fff;
  }
  @media screen and (max-width: 769px) {
    bottom: 4vh;
  }
`;

Btn.defaultProps = {
  className: '',
  children: 'Фильтры',
  filterShow: null,
};

Btn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  filterShow: PropTypes.func,
};
