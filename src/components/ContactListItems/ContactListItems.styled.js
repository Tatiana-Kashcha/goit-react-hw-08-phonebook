import styled from 'styled-components';

export const ButtonDel = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  color: rgb(245 29 29);
  font-weight: bold;
  border: 1px solid rgb(245 29 29);
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 0px;
  &:active {
    background-color: rgb(245 29 29);
    color: #ffffff;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  margin-left: 10px;
`;

export const Number = styled.p`
  font-size: 18px;
  margin-left: 5px;
`;

export const ButtonEdit = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  color: rgb(34 155 15);
  font-weight: bold;
  border: 1px solid rgb(34 155 15);
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 0px;
  &:active {
    background-color: rgb(34 155 15);
    color: #ffffff;
  }
`;
