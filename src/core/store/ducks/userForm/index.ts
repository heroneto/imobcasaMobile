import { Reducer } from 'redux';
import { UserFormState, UserFormTypes, User } from './types';

const INITIAL_STATE: UserFormState = {
  data: [],
  error: false,
  loading: false,
  response: "",
  usersNotRelated: []
};


const reducer: Reducer<UserFormState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserFormTypes.REQUEST_LIST:
      return { ...state, loading: true, response: "" };
    case UserFormTypes.SUCCESS_REQUEST_LIST:
      return {
        ...state, loading: false, error: false, data: action.payload.data, response: "",
      };
    case UserFormTypes.FAILURE_REQUEST_LIST:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case UserFormTypes.LIST_NOT_RELATED_USERS:
      return { ...state, loading: true, response: "" };
    case UserFormTypes.SUCCESS_LIST_NOT_RELATED_USERS:
      return {
        ...state, loading: false, error: false, usersNotRelated: action.payload.data,
      };
    case UserFormTypes.FAILURE_LIST_NOT_RELATED_USERS:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case UserFormTypes.ADD:
      return { ...state, loading: true, response: "" };
    case UserFormTypes.SUCCESS_ADD:
      return {
        ...state, loading: false, error: false, response: action.payload.response,
      };
    case UserFormTypes.FAILURE_ADD:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case UserFormTypes.REMOVE:
      return { ...state, loading: true, response: "" };
    case UserFormTypes.SUCCESS_REMOVE:
      return {
        ...state, loading: false, error: false, response: action.payload.response,
      };
    case UserFormTypes.FAILURE_REMOVE:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };


    case UserFormTypes.RESET_STORE:
      return { ...state, loading: true, response: "" };
    case UserFormTypes.SUCCESS_RESET_STORE:
      return state;
    case UserFormTypes.FAILURE_RESET_STORE:
      return {
        ...state, loading: false, error: true, response: "Falha no Reset da Store"
      };

    default:
      return state;
  }
};

export default reducer;
