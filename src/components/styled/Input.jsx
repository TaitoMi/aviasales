import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ className, checkboxHandler, checkState }) => {
  return (
    <input type="checkbox" checked={checkState} className={className} onChange={checkboxHandler} />
  );
};

export default styled(Input)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }
  &::before {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid ${({ checkState }) => (checkState ? '#2196F3' : '#9abbce')};
    border-radius: 2px;
    z-index: 10;
  }
  &::after {
    display: block;
    opacity: ${({ checkState }) => (checkState ? '1' : '0')};
    z-index: 11;
    width: 10px;
    height: 6px;
    transform: rotate(-45deg) translate(-5%, -100%);
    border-left: 2px solid #2196f3;
    border-bottom: 2px solid #2196f3;
  }
`;

Input.defaultProps = {
  className: '',
  checkboxHandler: null,
  checkState: false,
};

Input.propTypes = {
  checkState: PropTypes.bool,
  className: PropTypes.string,
  checkboxHandler: PropTypes.func,
};
