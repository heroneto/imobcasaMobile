import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { TokenState } from './ducks/tokens/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { LoggedUserState } from './ducks/loggedUser/types';

export interface ApplicationState {
  tokens: TokenState,
  loggedUser: LoggedUserState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
