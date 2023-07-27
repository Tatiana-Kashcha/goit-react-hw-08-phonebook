import { useEffect } from 'react';
import * as s from './Modal.styled';
import PropTypes from 'prop-types';

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return (
    <s.Overlay onClick={handleBackdropClick}>
      <s.Modal>
        {children}
        <s.CloseButton type="button" onClick={closeModal}>
          Cancel
        </s.CloseButton>
      </s.Modal>
    </s.Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
