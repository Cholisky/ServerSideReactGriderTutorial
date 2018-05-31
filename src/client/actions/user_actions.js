import 'babel-polyfill';
import { ENDPOINTS } from '../../constants/network_constants';
import { TYPES_USERS } from '../../constants/types';

const fetchUsers = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get(ENDPOINTS.USERS);

    dispatch({
      type: TYPES_USERS.FETCH,
      payload: res,
    });
  } catch (error) {
    console.log('user_actions error: ', error);
  }
};

export const userActions = {
  fetchUsers,
};
