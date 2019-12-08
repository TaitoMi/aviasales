import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Column, { TopPart, BottomPart } from './Column';

const Segment = ({ className, origin, destination, date, stops, duration }) => {
  const fromTo = `${origin} – ${destination}`;
  const fromTime = date.slice(0, date.length - 8).split('T')[1];
  let toTimeHours = Math.floor(duration / 60);
  const toTimeMins = duration - toTimeHours * 60;
  const inTravel = toTimeHours;
  if (toTimeHours > 23) {
    toTimeHours -= 23;
  }
  return (
    <div className={className}>
      <Column>
        {/* {stops[0]} */}
        <TopPart>{fromTo}</TopPart>
        <BottomPart>
          {fromTime} – {toTimeHours.toString().padStart(2, '0')}:
          {toTimeMins.toString().padStart(2, '0')}
        </BottomPart>
      </Column>
      <Column>
        <TopPart>в пути</TopPart>
        <BottomPart>
          {inTravel}ч {toTimeMins}м
        </BottomPart>
      </Column>
      <Column>
        <TopPart>
          {stops.length === 0
            ? 'без пересадок'
            : `${stops.length} ${stops.length === 1 ? 'пересадка' : 'пересадки'}`}
        </TopPart>
        {stops.length === 0 ? null : <BottomPart>{stops.join(',')}</BottomPart>}
      </Column>
    </div>
  );
};

export default styled(Segment)`
  margin-top: 6px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
