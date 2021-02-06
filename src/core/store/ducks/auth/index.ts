import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    accessToken: "",
    refreshToken: "",
  },
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case AuthTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: {refreshToken: "", accessToken: ""},
      };
    case AuthTypes.LOAD_TOKENS_STORAGE:
      return {
        ...state, loading: true
      }
    case AuthTypes.LOAD_REFRESH_ACCESSTOKEN:
      return {
        ...state, loading: true
      }
    default:
      return state;
  }
};

export default reducer;
