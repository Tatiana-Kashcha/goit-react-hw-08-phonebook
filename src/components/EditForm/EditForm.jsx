import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editContact } from 'redux/operations';
import * as s from './EditForm.styled';

export const EditForm = ({ editName, editNumber, id, closeModal }) => {
  const [name, setName] = useState(editName);
  const [number, setNumber] = useState(editNumber);
  const dispatch = useDispatch();

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
  };

  const handleSubmit = e => {
    e.preventDefault();

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

      <button type="submit">Change</button>
    </s.Form>
  );
};
