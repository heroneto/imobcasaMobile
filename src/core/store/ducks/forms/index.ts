import { Reducer } from 'redux';
import { FormState, FormsTypes } from './types';

const INITIAL_STATE: FormState = {
  data: [],
  selectedForm: null,
  error: false,
  loading: false,
  response: "",
  activeForms: [],
  inactiveForms: []
};

const reducer: Reducer<FormState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormsTypes.REQUEST_LIST:
      return { ...state, loading: true };
    case FormsTypes.SUCCESS_REQUEST_LIST:
      return {
        ...state, loading: false, error: false, data: action.payload.data, response: action.payload.response,
      };
    case FormsTypes.FAILURE_REQUEST_LIST:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case FormsTypes.CREATE:
      return { ...state, loading: true, error: false };
    case FormsTypes.SUCCESS_CREATE:
      return {
        ...state, loading: false, error: false, selectedForm: action.payload.data, response: action.payload.response,
      };
    case FormsTypes.FAILURE_CREATE:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case FormsTypes.SELECT:
      return { ...state, loading: true, error: false };
    case FormsTypes.SUCCESS_SELECT:
      return {
        ...state, loading: false, error: false, selectedForm: action.payload.data, response: action.payload.response,
      };
    case FormsTypes.FAILURE_SELECT:
      return {
        ...state, loading: false, error: true, ressponse: action.payload.response
      };

    default:
      return state;
  }
};

export default reducer;
