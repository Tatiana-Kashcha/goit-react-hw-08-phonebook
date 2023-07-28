import { useDispatch } from 'react-redux';
import { editContact } from 'redux/operations';
import * as s from './EditForm.styled';

export const EditForm = ({ editName, editNumber, id, closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      editContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
        id,
      })
    );
    form.reset();
    closeModal();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Label>
        Name {editName}
        <input type="text" name="name" required />
      </s.Label>
      <s.Label>
        Number {editNumber}
        <input type="tel" name="number" required />
      </s.Label>
      <button type="submit">Change</button>
    </s.Form>
  );
};
