import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import * as s from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <s.Header>
      <s.Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </s.Container>
    </s.Header>
  );
};
