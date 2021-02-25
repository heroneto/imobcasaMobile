import { Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';

const INITIALSELETEDUSER = {
  active: false,
  admin: false,
  createdAt: new Date,
  updatedAt: new Date,
  email: "",
  fullName: "",
  id: "",
  username: ""
}

const INITIAL_STATE: UsersState = {
  data: [],
  activeUsers: [],
  inactiveUsers: [],
  error: false,
  loading: false,
  selectedUser: INITIALSELETEDUSER,
  response: ""
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.REQUEST_LIST:
      return { ...state, loading: true };
    case UsersTypes.SUCCESS_REQUEST_LIST:
      return {
        ...state, loading: false, error: false, data: action.payload.data, response: action.payload.response,
      };
    case UsersTypes.FAILURE_REQUEST_LIST:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case UsersTypes.SELECT:
      return {
        ...state, loading: true, response: ""
      };
    case UsersTypes.SUCCESS_SELECT:
      return {
        ...state, loading: false, error: false, selectedUser: action.payload.selectedUser
      };
    case UsersTypes.FAILURE_SELECT:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case UsersTypes.EDIT:
      return {
        ...state, loading: true, response: ""
      }
    case UsersTypes.SUCCESS_EDIT:
      return {
        ...state,
        loading: false,
        error: false,
        selectedUser: action.payload.selectedUser,
        data: action.payload.data,
        response: action.payload.response
      }
    case UsersTypes.FAILURE_EDIT:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      }

    case UsersTypes.RESET_PASSWORD:
      return {
        ...state, loading: true, response: ""
      }
    case UsersTypes.SUCCESS_RESET_PASSWORD:
      return {
        ...state, loading: false, error: false, response: action.payload.response
      }
    case UsersTypes.FAILURE_RESET_PASSWORD:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      }

    case UsersTypes.CREATE:
      return {
        ...state, loading: true, response: "", selectedUser: INITIALSELETEDUSER
      }
    case UsersTypes.SUCCESS_CREATE:
      return {
        ...state,
        loading: false,
        error: false,
        selectedUser: action.payload.selectedUser,
        data: action.payload.data,
        response: action.payload.response
      }
    case UsersTypes.FAILURE_CREATE:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      }

    case UsersTypes.DELETE:
      return {
        ...state, loading: true, response: ""
      }
    case UsersTypes.SUCCESS_DELETE:
      return {
        ...state,
        loading: false,
        error: false,
        selectedUser: INITIALSELETEDUSER,
        data: action.payload.data,
        response: action.payload.response
      }
    case UsersTypes.FAILURE_DELETE:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      }
    default:
      return state;
  }
};

export default reducer;
