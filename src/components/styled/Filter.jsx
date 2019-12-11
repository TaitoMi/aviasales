import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Title from './Title';

const Filter = ({ className, checkboxHandler, filter }) => {
  return (
    <section className={className}>
      <Title>количество пересадок</Title>
      <Label>
        <Input checkState={filter.all} checkboxHandler={checkboxHandler('all')} />
        Все
      </Label>
      <Label>
        <Input
          checkState={filter.withoutTransplant}
          checkboxHandler={checkboxHandler('withoutTransplant')}
        />
        Без пересадок
      </Label>
      <Label>
        <Input
          checkState={filter.oneTransplant}
          checkboxHandler={checkboxHandler('oneTransplant')}
        />
        1 пересадка
      </Label>
      <Label>
        <Input
          checkState={filter.twoTransplant}
          checkboxHandler={checkboxHandler('twoTransplant')}
        />
        2 пересадки
      </Label>
      <Label>
        <Input
          checkState={filter.threeTransplant}
          checkboxHandler={checkboxHandler('threeTransplant')}
        />
        3 пересадки
      </Label>
    </section>
  );
};

export default styled(Filter)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 232px;
  height: 252px;
  background-color: #fff;
  color: #4a4a4a;
  padding: 20px 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.3s ease;
  @media screen and (max-width: 769px) {
    z-index: 11;
    position: fixed;
    min-width: 400px;
    min-height: 404px;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${({ isMobile }) => (isMobile ? '20vh' : '-100vh')};
    box-shadow: 0px 2px 18px 0px black;
  }
`;

Filter.defaultProps = {
  className: '',
  checkboxHandler: null,
  filter: {
    all: false,
    withoutTransplant: false,
    oneTransplant: false,
    twoTransplant: false,
    threeTransplant: false,
  },
};

Filter.propTypes = {
  filter: PropTypes.shape({
    all: PropTypes.bool,
    withoutTransplant: PropTypes.bool,
    oneTransplant: PropTypes.bool,
    twoTransplant: PropTypes.bool,
    threeTransplant: PropTypes.bool,
  }),
  className: PropTypes.string,
  checkboxHandler: PropTypes.func,
};
