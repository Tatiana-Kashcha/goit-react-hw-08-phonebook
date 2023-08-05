import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editContact } from 'redux/operations';
import { selectUsers } from 'redux/selectors';
import * as s from './EditForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const EditForm = ({ editName, editNumber, id, closeModal }) => {
  const [name, setName] = useState(editName);
  const [number, setNumber] = useState(editNumber);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleCange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
    if (name !== editName || number !== editNumber) {
      setbuttonDisabled(false);
    }
  };

  const isDuplicateEditUser = users.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (isDuplicateEditUser) {
      Notify.failure('Such a name already exists! When changing the number, you must change the name!');
      return;
    }

    dispatch(editContact({ name, number, id }));
    reset();
    closeModal();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      <s.Label>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleCange}
        />
      </s.Label>

      <s.Label>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleCange}
        />
      </s.Label>

      <button disabled={buttonDisabled} type="submit">
        Change
      </button>
    </s.Form>
  );
};
