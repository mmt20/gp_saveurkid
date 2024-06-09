import { LOGIN_ADMIN, LOGOUT_ADMIN, REFRESH_TOKEN } from '../type';

const inital = {
  loginAdmin: [],
  logoutAdmin: [],
  refreshToken: [],
  loading: true,
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        loginAdmin: action.payload,
      };
    case LOGOUT_ADMIN:
      return {
        ...state,
        logoutAdmin: action.payload,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
