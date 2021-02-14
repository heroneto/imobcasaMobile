import { Reducer } from 'redux';
import { LoggedUserState, LoggedUserTypes } from './types';

const INITIAL_STATE: LoggedUserState = {
  data: {
    email: "",
    fullName: "",
    id: "",
    isLogged: false,
    username: "",
    admin: false,
    active: false
  },
  error: false,
  loading: false,
};

const reducer: Reducer<LoggedUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoggedUserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LoggedUserTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case LoggedUserTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true
      };
    default:
      return state;
  }
};

export default reducer;
