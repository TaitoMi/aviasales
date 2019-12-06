import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SortBtn = ({ className, children }) => {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default styled(SortBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 2.5px;
  cursor: pointer;
  background: #2196f3;
  border: 1px solid transparent;
  border-top-left-radius: ${({ left }) => (left ? '5px' : '0px')};
  border-bottom-left-radius: ${({ left }) => (left ? '5px' : '0px')};
  border-top-right-radius: ${({ right }) => (right ? '50px' : '0px')};
  border-bottom-right-radius: ${({ right }) => (right ? '5px' : '0px')};
  // border-top-right-radius: 50px;
  width: 252px;
  height: 50px;
  color: #fff;
  text-transform: uppercase;
`;

SortBtn.defaultProps = {
  className: '',
  children: '',
};

SortBtn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
