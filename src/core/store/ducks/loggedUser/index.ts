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
  response: "",
  httpCode: 0
};

const reducer: Reducer<LoggedUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoggedUserTypes.GET:
      return {
        ...state, loading: true
      }
    case LoggedUserTypes.SUCCESS_GET:
      return {
        ...state,
        data: action.payload.data,
        response: action.payload.response,
        httpCode: 0,
        loading: false,
        error: false,
      }
    case LoggedUserTypes.FAILURE_GET:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }

    case LoggedUserTypes.EDIT:
      return {
        ...state, loading: true
      }
    case LoggedUserTypes.SUCCESS_EDIT:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
        httpCode: action.payload.httpCode,
        response: action.payload.response
      }
    case LoggedUserTypes.FAILURE_EDIT:
      return {
        ...state,
        loading: false,
        error: true,
        httpCode: action.payload.httpCode,
        response: action.payload.response
      }

    case LoggedUserTypes.CHANGE_PASSWORD:
      return {
        ...state, loading: true
      }
    case LoggedUserTypes.SUCCESS_CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        error: false,
        httpCode: action.payload.httpCode,
        response: action.payload.response
      }
    case LoggedUserTypes.FAILURE_CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        error: true,
        httpCode: action.payload.httpCode,
        response: action.payload.response
      }

    default:
      return state;
  }
};

export default reducer;
