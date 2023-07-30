import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import * as s from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <s.Wrapper>
      <s.Greeting>
        Welcome, <span>{user.name}</span>
      </s.Greeting>
      <s.Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </s.Button>
    </s.Wrapper>
  );
};
