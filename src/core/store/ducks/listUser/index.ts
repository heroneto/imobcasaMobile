import { Reducer } from 'redux';
import { ListUserState, ListUserTypes } from './types';

const INITIAL_STATE: ListUserState = {
  data: [],
  activeUsers: [],
  inactiveUsers: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ListUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListUserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ListUserTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ListUserTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true
      };
    default:
      return state;
  }
};

export default reducer;
