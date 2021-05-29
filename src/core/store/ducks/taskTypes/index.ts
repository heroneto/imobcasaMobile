import { Reducer } from 'redux';
import { TaskTypesState, TaskTypesTypes } from './types';

const INITIAL_STATE: TaskTypesState = {
  data: [],
  error: false,
  loading: false,
  response: "",
  httpCode: 0
};

const reducer: Reducer<TaskTypesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case TaskTypesTypes.LIST:
      return {
        ...state, loading: true
      }
    case TaskTypesTypes.SUCCESS_LIST:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      }
    case TaskTypesTypes.FAILURE_LIST:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response
      }

    case TaskTypesTypes.RESET:
      return INITIAL_STATE

    case TaskTypesTypes.FAILURE_RESET:
      return state

    case TaskTypesTypes.SUCCESS_RESET:
      return INITIAL_STATE

    default:
      return state;
  }
};

export default reducer;
