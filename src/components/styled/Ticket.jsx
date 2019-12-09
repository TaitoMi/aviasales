import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import HeaderWrapper from './HeaderWrapper';
import Price from './Price';
import Carrier from './Carrier';
import SegmentRow from './SegmentRow';

const Ticket = ({ className, price, carrier, segments }) => {
  const convertPrice = money => {
    const strMoney = money.toString();
    if (money > 99999) {
      return `${strMoney.slice(0, 3)} ${strMoney.slice(3)} Р`;
    }
    if (money > 9999) {
      return `${strMoney.slice(0, 2)} ${strMoney.slice(2)} Р`;
    }
    if (money > 999) {
      return `${strMoney.slice(0, 1)} ${strMoney.slice(1)} Р`;
    }
    return `${money.toString()} Р`;
  };
  return (
    <div className={className}>
      <HeaderWrapper>
        <Price>{convertPrice(price)}</Price>
        <Carrier carrier={carrier} />
      </HeaderWrapper>
      {segments.map(segment => (
        <SegmentRow
          key={`segment-${Math.random()}`}
          origin={segment.origin}
          destination={segment.destination}
          stops={segment.stops}
          duration={segment.duration}
          date={segment.date}
        />
      ))}
    </div>
  );
};

export default styled(Ticket)`
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`;

Ticket.defaultProps = {
  className: '',
  carrier: '',
  price: null,
  segments: [],
};

Ticket.propTypes = {
  className: PropTypes.string,
  carrier: PropTypes.string,
  price: PropTypes.number,
  segments: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.obj, PropTypes.string])),
};
