import { TYPES_USERS } from '../../constants/types';

export default (state = [], action) => {
  switch (action.type) {
    case TYPES_USERS.FETCH:
      return action.payload.data;
    default:
      return state;
  }
};
