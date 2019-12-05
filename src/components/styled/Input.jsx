import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ className, checkboxHandler }) => {
  return <input type="checkbox" className={className} onChange={checkboxHandler} />;
};

export default styled(Input)`
  width: 50px;
  height: 50px;
`;

Input.defaultProps = {
  className: '',
  checkboxHandler: null,
};

Input.propTypes = {
  className: PropTypes.string,
  checkboxHandler: PropTypes.func,
};
