import { Reducer } from 'redux';
import { ChangeMyPasswordState, ChangeMyPasswordTypes } from './types';

const INITIAL_STATE: ChangeMyPasswordState = {
  data: {
    response: ""
  },
  error: false,
  loading: false,
};

const reducer: Reducer<ChangeMyPasswordState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChangeMyPasswordTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ChangeMyPasswordTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case ChangeMyPasswordTypes.LOAD_FAILURE:
      return {
       loading: false, error: true, data: action.payload.data
      };
    case ChangeMyPasswordTypes.LOAD_RESET_STORE:
      return {
        loading: false, error: false, data: { response: ""}
      };
    default:
      return state;
  }
};

export default reducer;
