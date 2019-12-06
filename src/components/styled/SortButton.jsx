import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SortBtn = ({ className, children, changer }) => {
  return (
    <button type="button" onClick={changer} className={className}>
      {children}
    </button>
  );
};

export const SortButton = styled(SortBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 2.5px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#2196F3' : '#FFFFFF')};
  border: 1px solid ${({ isActive }) => (isActive ? '#2196F3' : '#DFE5EC')};
  border-top-right-radius: ${({ right }) => (right ? '5px' : '0px')};
  border-bottom-right-radius: ${({ right }) => (right ? '5px' : '0px')};
  border-top-left-radius: ${({ left }) => (left ? '5px' : '0px')};
  border-bottom-left-radius: ${({ left }) => (left ? '5px' : '0px')};
  width: 252px;
  height: 50px;
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#4A4A4A')};
  text-transform: uppercase;
`;

export default styled(SortButton)`
  background-color: ${({ isActive }) => (!isActive ? '#2196F3' : '#FFFFFF')};
  color: ${({ isActive }) => (!isActive ? '#FFFFFF' : '#4A4A4A')};
  border: 1px solid ${({ isActive }) => (!isActive ? '#2196F3' : '#DFE5EC')};
`;

SortBtn.defaultProps = {
  className: '',
  children: '',
  changer: null,
};

SortBtn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  changer: PropTypes.func,
};
