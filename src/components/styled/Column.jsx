import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 110px;
  margin-right: 70px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const TopPart = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #a0b0b9;
  font-weight: 600;
  margin-top: 15px;
`;

export const BottomPart = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
  color: #4a4a4a;
`;
