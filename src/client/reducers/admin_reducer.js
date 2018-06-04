import { TYPES_ADMINS } from '../../constants/types';

export default (state = [], action) => {
  switch (action.type) {
    case TYPES_ADMINS.FETCH:
      return action.payload.data;
    default:
      return state;
  }
};
