import styled from 'styled-components';

export const Description = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 4px;
  margin-top: 6px;
  border: 1px solid rgb(0 0 0);
  border-radius: 4px;
  &:focus {
    border-color: rgb(99, 149, 241, 0.6);
    outline: 2px rgba(99, 149, 241, 0.6);
    outline-style: solid;
  }
`;
