import { Reducer } from 'redux';
import { FacebookFormsState, FacebookFormsTypes } from './types';

const INTIALDATA = {
  forms: [],
  next: "",
  after: ""
}



const INITIAL_STATE: FacebookFormsState = {
  data: INTIALDATA,
  error: false,
  loading: false,
  selectedForm: null,
  response: ""
};

const reducer: Reducer<FacebookFormsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FacebookFormsTypes.LIST:
      return { ...state, loading: true };
    case FacebookFormsTypes.SUCCESS_LIST:
      return {
        ...state, loading: false, error: false, data: action.payload.data, response: action.payload.response,
      };
    case FacebookFormsTypes.FAILURE_LIST:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    case FacebookFormsTypes.LOAD_MORE:
      return { ...state, loading: true };
    case FacebookFormsTypes.SUCCESS_LOAD_MORE:
      return {
        ...state, 
        loading: false, 
        error: false, 
        data: action.payload.data,
        response: action.payload.response,
      };
    case FacebookFormsTypes.FAILURE_LOAD_MORE:
      return {
        ...state, loading: false, error: true, response: action.payload.response
      };

    default:
      return state;
  }
};

export default reducer;
