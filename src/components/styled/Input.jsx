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
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 20px;
    height: 20px;
    /* background-color: #fff; */
    background-color: {(props) => props.checkState ? 'blue' : '#fff')};
    border: 1px solid #9abbce;
    border-radius: 2px;
    z-index: 10;
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
