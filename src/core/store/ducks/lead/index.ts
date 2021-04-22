import { Reducer } from 'redux';
import { LeadState, LeadTypes } from './types';

const INITIAL_STATE: LeadState = {
  data: [],
  error: false,
  loading: false,
  response: "",
  httpCode: 0
};

const reducer: Reducer<LeadState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadTypes.LIST:
      return {
        ...state, loading: true
      }
    case LeadTypes.SUCCESS_LIST:
      return {
        ...state,
        data: action.payload.data,
        httpCode: 0,
        loading: false,
        error: false,
      }
    case LeadTypes.FAILURE_LIST:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }

    case LeadTypes.RESET:
      return INITIAL_STATE


    default:
      return state;
  }
};

export default reducer;
