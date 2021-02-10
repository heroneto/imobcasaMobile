import { Reducer } from 'redux';
import { TokenState, TokenTypes } from './types';

const INITIAL_STATE: TokenState = {
  data: {
    accessToken: "",
    refreshToken: "",
  },
  error: false,
  loading: false,
  httpCode: -1
};

const reducer: Reducer<TokenState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TokenTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case TokenTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case TokenTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true
      };
    case TokenTypes.LOAD_TOKENS_STORAGE:
      return {
        ...state, loading: true
      }
    case TokenTypes.LOAD_REFRESH_ACCESSTOKEN:
      return {
        ...state, loading: true
      }
    default:
      return state;
  }
};

export default reducer;
