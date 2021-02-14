import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { TokenState } from './ducks/tokens/types';
import { LoggedUserState } from './ducks/loggedUser/types';
import { ChangeMyPasswordState } from './ducks/changeMyPassword/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';


export interface ApplicationState {
  tokens: TokenState,
  loggedUser: LoggedUserState
  changeMyPassword: ChangeMyPasswordState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
