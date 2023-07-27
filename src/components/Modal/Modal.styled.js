import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: #ffff;
  border-radius: 4px;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
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
