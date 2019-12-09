import styled from 'styled-components';

export default styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  height: 40px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  padding-left: 20px;
  &:hover {
    background: #f1fcff;
  }
  @media screen and (max-width: 769px) {
    font-size: 25px;
    height: 70px;
    padding-left: 33px;
  }
`;
