import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Column, { TopPart, BottomPart } from './Column';

const Segment = ({ className, origin, destination, date, stops, duration }) => {
  const fromTo = `${origin} - ${destination}`;
  const fromTime = date.slice(0, date.length - 8).split('T')[1];
  let toTimeHours = Math.floor(duration / 60);
  let toTimeMins = duration - toTimeHours * 60;
  if (toTimeMins > 59) {
    toTimeMins -= 1;
    toTimeHours += 1;
  }
  return (
    <div className={className}>
      <Column>
        {stops[0]}
        <TopPart>{fromTo}</TopPart>
        <BottomPart>
          {fromTime} - {toTimeHours}:{toTimeMins}
        </BottomPart>
      </Column>
    </div>
  );
};

export default styled(Segment)`
  margin-top: 10px;
  width: 100%;
  display: flex;
  height: 50px;
  border: 1px solid red;
`;

Segment.defaultProps = {
  className: '',
  origin: '',
  destination: '',
  date: '',
  stops: [],
  duration: null,
};

Segment.propTypes = {
  className: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string,
  stops: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.obj, PropTypes.string])),
  duration: PropTypes.number,
};
