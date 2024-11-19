import { LOGIN, LOGOUT } from ".";

const login = () => {
  return {
    type: LOGIN,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};

export { login, logout };
