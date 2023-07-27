import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: #212121;
  margin-left: 20px;
  &.active {
    color: orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;
