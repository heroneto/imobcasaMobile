import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    httpCode: 0,
    response: ""
  },
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return { ...state, loading: true };
    case AuthTypes.SUCCESS_LOGIN:
      return {
        ...state, loading: false, error: false, data: action.payload.data
      };
    case AuthTypes.FAILURE_LOGIN:
      return {
        ...state, loading: false, error: true, data: action.payload.data
      };

    case AuthTypes.LOGOUT:
      return { ...state, loading: true };
    case AuthTypes.SUCCESS_LOGOUT:
      return {
        ...state, loading: false, error: false, data: action.payload.data
      };
    case AuthTypes.FAILURE_LOGOUT:
      return {
        ...state, loading: false, error: true, data: action.payload.data
      };

    case AuthTypes.CHECK:
      return { ...state, loading: true };
    case AuthTypes.SUCCESS_CHECK:
      return {
        ...state, loading: false, error: false, data: action.payload.data
      };
    case AuthTypes.FAILURE_CHECK:
      return {
        ...state, loading: false, error: true, data: action.payload.data
      };

    case AuthTypes.RENEW:
      return { ...state, loading: true };
    case AuthTypes.SUCCESS_RENEW:
      return {
        ...state, loading: false, error: false, data: action.payload.data
      };
    case AuthTypes.FAILURE_RENEW:
      return {
        ...state, loading: false, error: true, data: action.payload.data
      };
    default:
      return state;
  }
};

export default reducer;
