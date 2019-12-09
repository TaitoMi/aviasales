import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Carrier = ({ className, carrier }) => {
  const path = `https://pics.avs.io/99/36/${carrier}.png`;
  return <img className={className} src={path} alt="Company Logo" />;
};

export default styled(Carrier)`
  width: 110px;
  height: 36px;
  @media screen and (max-width: 769px) {
    width: 220px;
    height: 72px;
  }
`;

Carrier.defaultProps = {
  className: '',
  carrier: '',
};

Carrier.propTypes = {
  className: PropTypes.string,
  carrier: PropTypes.string,
};
