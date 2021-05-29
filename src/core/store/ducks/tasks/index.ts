import { Reducer } from 'redux';
import { TaskState, TaskTypes } from './types';

const INITIAL_STATE: TaskState = {
  data: null,
  error: false,
  loading: false,
  response: "",
  httpCode: 0
};

const reducer: Reducer<TaskState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case TaskTypes.ADD:
      return {
        ...state, loading: true
      }
    case TaskTypes.SUCCESS_ADD:
      return {
        ...state,
        loading: false,
        error: false,
        response: action.payload.response,
        data: action.payload.data
      }
    case TaskTypes.FAILURE_ADD:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response,
      }

    case TaskTypes.GET:
      return {
        ...state, loading: true
      }
    case TaskTypes.SUCCESS_GET:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      }
    case TaskTypes.FAILURE_GET:
      return {
        ...state,
        error: true,
        loading: false,
        response: action.payload.response,
      }


    case TaskTypes.RESET:
      return INITIAL_STATE

    case TaskTypes.FAILURE_RESET:
      return state

    case TaskTypes.SUCCESS_RESET:
      return INITIAL_STATE

    default:
      return state;
  }
};

export default reducer;
