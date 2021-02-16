import { Reducer } from 'redux';
import { ListUserState, ListUserTypes } from './types';

const INITIAL_STATE: ListUserState = {
  data: [],
  activeUsers: [],
  inactiveUsers: [],
  error: false,
  loading: false,
  selectedUser: {
    active: false,
    admin: false,
    createdAt: new Date,
    updatedAt: new Date,
    email: "",
    fullName: "",
    id: "",
    username: ""
  },
  response: ""
};

const reducer: Reducer<ListUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListUserTypes.REQUEST_LIST:
      return { ...state, loading: true };
    case ListUserTypes.SUCCESS_REQUEST_LIST:
      return {
        ...state, loading: false, error: false, data: action.payload.data, response: action.payload.response,
      };
    case ListUserTypes.FAILURE_REQUEST_LIST:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case ListUserTypes.SELECT:
      return {
        ...state, loading: true, response: ""
      };
    case ListUserTypes.SUCCESS_SELECT:
      return {
        ...state, loading: false, error: false, selectedUser: action.payload.selectedUser
      };
    case ListUserTypes.FAILURE_SELECT:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case ListUserTypes.EDIT:
      return {
        ...state, loading: true, response: ""
      }
    case ListUserTypes.SUCCESS_EDIT:
      return {
        ...state, 
        loading: false, 
        error: false, 
        selectedUser: action.payload.selectedUser, 
        data: action.payload.data, 
        response: action.payload.response
      }
    case ListUserTypes.FAILURE_EDIT:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      }

    case ListUserTypes.RESET_PASSWORD:
      return {
        ...state, loading: true, response: ""
      }
    case ListUserTypes.SUCCESS_RESET_PASSWORD:
      return {
        ...state, loading: false, error: false, response: action.payload.response
      }
    case ListUserTypes.FAILURE_RESET_PASSWORD:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      }
    default:
      return state;
  }
};

export default reducer;
