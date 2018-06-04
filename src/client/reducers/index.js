import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import authReducer from './auth_reducer';
import adminsReducer from './admin_reducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
});
