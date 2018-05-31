import { TYPES_AUTH } from '../../constants/types';

export default (state = null, action) => {
  switch (action.type) {
    case TYPES_AUTH.FETCH_CURRENT:
      return action.payload.data || false;
    default:
      return state;
  }
};
