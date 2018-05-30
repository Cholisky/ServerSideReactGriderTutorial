// listen port for the server
export const LISTEN_PORT = 3500;

/**
 my project manager's preferred way of formatting URLs as constants.
 Normally I'd break them up more into separate objects but there's so few here and I wanted to
 do a basic version of this method.
 no matter what changes, almost anything should be one change and it keeps all the moving parts
 together and clear.
 API address changes, change one line and all endpoints are updated, etc.
 I've also found that keeping the endpoints separate makes them easier to read
 */

// API address
const API_ADDRESS = 'https://react-ssr-api.herokuapp.com';

// API endpoints
const USERS = '/users';
const ADMINS = '/admin';
const LOGOUT = '/logout';
const AUTH = '/auth/google';
const CURRENT_USER = '/current_user';

export const API_USER_ENDPOINTS = {
  USERS: `${API_ADDRESS}${USERS}`,
  ADMINS: `${API_ADDRESS}${ADMINS}`,
};

export const API_AUTH_ENDPOINTS = {
  LOGOUT: `${API_ADDRESS}${LOGOUT}`,
  AUTH: `${API_ADDRESS}${AUTH}`,
  CURRENT_USER: `${API_ADDRESS}${CURRENT_USER}`,

};

