import 'babel-polyfill';
import _ from 'lodash';
import { ENDPOINTS } from '../../constants/network_constants';
import { TYPES_AUTH } from '../../constants/types';

const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get(ENDPOINTS.CURRENT_USER);

    dispatch({
      type: TYPES_AUTH.FETCH_CURRENT,
      payload: res,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('auth_actions error: ', _.get(error, 'response'));
  }
};

export const authActions = {
  fetchCurrentUser,
};
