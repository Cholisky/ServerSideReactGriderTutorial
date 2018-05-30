import 'babel-polyfill';
import { USER_TYPES } from '../../constants/types';
import { HTTP_USERS } from '../../http';

const fetchUsers = () => async (dispatch) => {
  const res = await HTTP_USERS.get();

  dispatch({
    type: USER_TYPES.FETCH,
    payload: res,
  });
};

export const userActions = {
  fetchUsers,
};
