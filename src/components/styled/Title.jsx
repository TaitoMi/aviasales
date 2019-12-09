import styled from 'styled-components';

export default styled.h1`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  @media screen and (max-width: 769px) {
    font-size: 25px;
    line-height: 35px;
    white-space: nowrap;
  }
`;
