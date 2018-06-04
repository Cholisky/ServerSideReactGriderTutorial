import 'babel-polyfill';
import _ from 'lodash';
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
    // eslint-disable-next-line no-console
    console.log('user_actions error: ', _.get(error, 'response'));
  }
};

export const userActions = {
  fetchUsers,
};
