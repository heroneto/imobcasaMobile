import { Reducer } from 'redux';
import { LeadStatusState, LeadStatusTypes } from './types';

const INITIAL_STATE: LeadStatusState = {
  data: [],
  error: false,
  loading: false,
  response: "",
  httpCode: 0
};

const reducer: Reducer<LeadStatusState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadStatusTypes.LIST:
      return {
        ...state, loading: true
      }
    case LeadStatusTypes.SUCCESS_LIST:
      return {
        ...state,
        data: action.payload.data,
        httpCode: 0,
        loading: false,
        error: false,
      }
    case LeadStatusTypes.FAILURE_LIST:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }

    case LeadStatusTypes.RESET:
      return INITIAL_STATE


    default:
      return state;
  }
};

export default reducer;
