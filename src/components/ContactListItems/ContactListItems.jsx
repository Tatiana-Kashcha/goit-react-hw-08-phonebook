import { useDispatch } from 'react-redux';
import * as s from './ContactListItems.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';

export const ContactListItems = ({ user: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <s.ButtonEdit onClick={showModal}>Edit</s.ButtonEdit>
      <s.Name>{name}:</s.Name>
      <s.Number>{number}</s.Number>
      <s.ButtonDel onClick={handleDelete}>Delete</s.ButtonDel>
      {isShowModal && (
        <Modal title="Edit contact" closeModal={closeModal}>
          <EditForm
            editName={name}
            editNumber={number}
            id={id}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

ContactListItems.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
