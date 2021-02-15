import { Reducer } from 'redux';
import { SelectedUserState, SelectedUserTypes } from './types';

const INITIAL_STATE: SelectedUserState = {
  data: {
    email: "",
    fullName: "",
    id: "",
    username: "",
    admin: false,
    active: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  error: false,
  loading: false,
  response: ""
};

const reducer: Reducer<SelectedUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SelectedUserTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false};
    case SelectedUserTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data, response: action.payload.response
      };
    case SelectedUserTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, response: action.payload.response
      };
    case SelectedUserTypes.LOAD_EDIT_USER:
      return {
        ...state, loading: true, error: false
      }
    default:
      return state;
  }
};

export default reducer;
