import { useAuth } from 'hooks';
import * as s from './Navagation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <s.StyledLink to="/">Home</s.StyledLink>
      {isLoggedIn && <s.StyledLink to="/contacts">Contacts</s.StyledLink>}
    </nav>
  );
};
