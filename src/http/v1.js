import axios from 'axios';
import { API_USER_ENDPOINTS, API_AUTH_ENDPOINTS } from '../constants/network_constants';

const getUsers = () => axios.get(API_USER_ENDPOINTS.USERS);

const getAdmins = () => axios.get(API_USER_ENDPOINTS.ADMINS);

const getCurrentUser = () => axios.get(API_AUTH_ENDPOINTS.CURRENT_USER);

export const HTTP_USERS = {
  get: getUsers,
};

export const HTTP_ADMINS = {
  get: getAdmins,
};

export const HTTP_AUTH = {
  getCurrentUser,
};
