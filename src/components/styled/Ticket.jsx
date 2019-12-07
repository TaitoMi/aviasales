import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './HeaderWrapper';
import Price from './Price';
import Carrier from './Carrier';

const Ticket = ({ className, price, carrier }) => {
  return (
    <div className={className}>
      <HeaderWrapper>
        <Price>{price}</Price>
        <Carrier carrier={carrier} />
      </HeaderWrapper>
    </div>
  );
};

export default styled(Ticket)`
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`;

Ticket.defaultProps = {
  className: '',
  carrier: '',
  price: null,
};

Ticket.propTypes = {
  className: PropTypes.string,
  carrier: PropTypes.string,
  price: PropTypes.number,
};
