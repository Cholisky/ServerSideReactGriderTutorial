// listen port for the server
export const LISTEN_PORT = 3000;

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
export const API_ADDRESS = 'http://react-ssr-api.herokuapp.com';

// API endpoints
export const ENDPOINTS = {
  USERS: '/users',
  ADMINS: '/admin',
  LOGOUT: '/logout',
  AUTH: '/auth/google',
  CURRENT_USER: '/current_user',
};

