import 'babel-polyfill';
import _ from 'lodash';
import { ENDPOINTS } from '../../constants/network_constants';
import { TYPES_ADMINS } from '../../constants/types';

const fetchAdmins = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get(ENDPOINTS.ADMINS);

    dispatch({
      type: TYPES_ADMINS.FETCH,
      payload: res,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('admin_actions error: ', _.get(error, 'response'));
  }
};

export const adminActions = {
  fetchAdmins,
};
