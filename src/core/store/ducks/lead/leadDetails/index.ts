import { Reducer } from 'redux';
import { LeadDetailsState, LeadDetailsTypes } from './types';

const INITIAL_STATE: LeadDetailsState = {
  data: null,
  error: false,
  loading: false,
  response: "",
  httpCode: 0
};

const reducer: Reducer<LeadDetailsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadDetailsTypes.GET:
      return {
        ...state, loading: true
      }
    case LeadDetailsTypes.SUCCESS_GET:
      return {
        ...state,
        data: action.payload.data,
        httpCode: 0,
        loading: false,
        error: false,
      }
    case LeadDetailsTypes.FAILURE_GET:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }

    case LeadDetailsTypes.EDIT:
      return {
        ...state, loading: true
      }
    case LeadDetailsTypes.SUCCESS_EDIT:
      return {
        ...state,
        loading: false,
        error: false,
        response: action.payload.response
      }
    case LeadDetailsTypes.FAILURE_EDIT:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }


    case LeadDetailsTypes.RESET_STORE:
      return INITIAL_STATE

    case LeadDetailsTypes.FAILURE_RESET_STORE:
      return state

    case LeadDetailsTypes.SUCCESS_RESET_STORE:
      return INITIAL_STATE

    default:
      return state;
  }
};

export default reducer;
