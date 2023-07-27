import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Greeting = styled.p`
  font-weight: bold;
  font-size: 18px;
  span {
    color: rgb(12 80 206);
  }
`;

export const Button = styled.button`
  padding: 4px 8px;
  margin-left: 10px;
  font-size: 14px;
  color: rgb(12 80 206);
  font-weight: bold;
  border: 1px solid rgb(12 80 206);
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 0px;
  &:active {
    background-color: rgb(12 80 206);
    color: #ffffff;
  }
`;
