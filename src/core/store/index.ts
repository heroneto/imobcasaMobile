import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LoggedUserState } from './ducks/loggedUser/types';
import { UsersState } from './ducks/users/types'
import { AuthState } from './ducks/auth/types'
import { FacebookFormsState } from './ducks/facebookForms/types';
import { FormState } from './ducks/forms/types';


import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';


export interface ApplicationState {
  loggedUser: LoggedUserState,
  listUser: UsersState,
  auth: AuthState
  facebookForms: FacebookFormsState,
  forms: FormState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
