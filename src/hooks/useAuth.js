import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);

  const user = useSelector(selectUser);
  console.log(user);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
