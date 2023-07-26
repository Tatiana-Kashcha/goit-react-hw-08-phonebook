import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: #212121;
  margin-right: 20px;
  &.active {
    color: orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;
