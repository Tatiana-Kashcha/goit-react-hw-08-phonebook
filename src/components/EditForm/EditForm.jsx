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
    // унеможливлює зміну літери з малої на велику в тому ж самому імені
    // contact => contact.name.toLowerCase() === name.toLowerCase()
    contact => contact.name === name
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (isDuplicateEditUser & (name !== editName)) {
      Notify.failure('This name already exists in your contact list!');
      return;
    }

    dispatch(editContact({ name, number, id }));
    Notify.success('Data updated successfully!');
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
