import * as s from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <s.StyledLink to="/register">Register</s.StyledLink>
      <s.StyledLink to="/login">Log In</s.StyledLink>
    </div>
  );
};
