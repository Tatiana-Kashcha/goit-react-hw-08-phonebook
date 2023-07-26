import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as s from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Label>
        Username
        <input type="text" name="name" required />
      </s.Label>
      <s.Label>
        Email
        <input type="email" name="email" required />
      </s.Label>
      <s.Label>
        Password
        <input type="password" name="password" required />
      </s.Label>
      <button type="submit">Register</button>
    </s.Form>
  );
};
