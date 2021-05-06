import { Reducer } from 'redux';
import { LeadSourceState, LeadSourceTypes } from './types';

const INITIAL_STATE: LeadSourceState = {
  data: [],
  error: false,
  loading: false,
  response: "",
  httpCode: 0
};

const reducer: Reducer<LeadSourceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadSourceTypes.LIST:
      return {
        ...state, loading: true
      }
    case LeadSourceTypes.SUCCESS_LIST:
      return {
        ...state,
        data: action.payload.data,
        httpCode: 0,
        loading: false,
        error: false,
      }
    case LeadSourceTypes.FAILURE_LIST:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }

    case LeadSourceTypes.RESET:
      return INITIAL_STATE


    default:
      return state;
  }
};

export default reducer;
