import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshAdminToken } from '../../redux/action/authAction';

export const isTokenExpired = (token) => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  if (!exp) return true;
  return Date.now() >= exp * 1000;
};

// Use this function inside a React component
export const useRefreshToken = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAdminToken());
  }, [dispatch]);
};

// Function to refresh token, can be called from anywhere
export const refreshToken = async (store) => {
  await store.dispatch(refreshAdminToken());
};
