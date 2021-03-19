import { Reducer } from 'redux';
import { FormState, FormsTypes } from './types';

const INITIAL_STATE: FormState = {
  data: [],
  form: null,
  createdForm: null,
  error: false,
  loading: false,
  response: "",
  activeForms: [],
  inactiveForms: []
};

const reducer: Reducer<FormState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormsTypes.REQUEST_LIST:
      return { ...state, loading: true, response: "" };
    case FormsTypes.SUCCESS_REQUEST_LIST:
      return {
        ...state, loading: false, error: false, data: action.payload.data, response: action.payload.response,
      };
    case FormsTypes.FAILURE_REQUEST_LIST:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case FormsTypes.CREATE:
      return { ...state, loading: true, error: false, response: "" };
    case FormsTypes.SUCCESS_CREATE:
      return {
        ...state, loading: false, error: false, response: action.payload.response, createdForm: action.payload.form,
      };
    case FormsTypes.FAILURE_CREATE:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case FormsTypes.GET:
      return { ...state, loading: true, error: false, response: "" };
    case FormsTypes.SUCCESS_GET:
      return {
        ...state, loading: false, error: false, form: action.payload.form,
      };
    case FormsTypes.FAILURE_GET:
      return {
        ...state, loading: false, error: true, ressponse: action.payload.response
      };

    case FormsTypes.ADD_USER:
      return { ...state, loading: true, error: false, response: "" };
    case FormsTypes.SUCCESS_ADD_USER:
      return {
        ...state, loading: false, error: false, response: action.payload.response,
      };
    case FormsTypes.FAILURE_ADD_USER:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    default:
      return state;
  }
};

export default reducer;
