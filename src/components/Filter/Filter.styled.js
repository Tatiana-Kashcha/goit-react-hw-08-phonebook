import styled from 'styled-components';

export const Description = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  color: rgb(12 80 206);
`;

export const Input = styled.input`
  width: 550px;
  padding: 4px;
  margin-top: 6px;
  border: 1px solid rgb(12 80 206);
  border-radius: 4px;
  &:focus {
    border-color: rgb(99, 149, 241, 0.6);
    outline: 2px rgba(99, 149, 241, 0.6);
    outline-style: solid;
  }
`;
