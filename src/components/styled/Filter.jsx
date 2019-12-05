import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Title from './Title';

const Filter = ({ className, checkboxHandler }) => {
  return (
    <section className={className}>
      <Title>количество пересадок</Title>
      <Label>
        <Input checkboxHandler={checkboxHandler('all')} />
        Все
      </Label>
      <Label>
        <Input checkboxHandler={checkboxHandler('widhoutTransplant')} />
      </Label>
      <Label>
        <Input checkboxHandler={checkboxHandler('oneTransplant')} />
      </Label>
      <Label>
        <Input checkboxHandler={checkboxHandler('twoTransplant')} />
      </Label>
      <Label>
        <Input checkboxHandler={checkboxHandler('threeTransplant')} />
      </Label>
    </section>
  );
};

export default styled(Filter)`
  width: 232px;
  height: 252;
  background-color: #fff;
  border: 1px solid red;
  color: #4a4a4a;
  padding: 20px;
`;

Filter.defaultProps = {
  className: '',
  checkboxHandler: null,
};

Filter.propTypes = {
  className: PropTypes.string,
  checkboxHandler: PropTypes.func,
};
