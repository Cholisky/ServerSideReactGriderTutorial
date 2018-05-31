import 'babel-polyfill';
import { TYPES_USERS } from '../../constants/types';
import { HTTP_USERS } from '../../http';

const fetchUsers = () => async (dispatch) => {
  const res = await HTTP_USERS.get();

  dispatch({
    type: TYPES_USERS.FETCH,
    payload: res,
  });
};

export const userActions = {
  fetchUsers,
};
