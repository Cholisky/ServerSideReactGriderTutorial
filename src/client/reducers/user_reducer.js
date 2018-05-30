import { USER_TYPES } from '../../constants/types';

export default (state = [], action) => {
  switch (action.type) {
    case USER_TYPES.FETCH:
      return action.payload.data;
    default:
      return state;
  }
};
