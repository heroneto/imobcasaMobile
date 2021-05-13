import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LoggedUserState } from './ducks/loggedUser/types';
import { UsersState } from './ducks/users/types'
import { AuthState } from './ducks/auth/types'
import { FacebookFormsState } from './ducks/facebookForms/types';
import { FormState } from './ducks/forms/types';
import { UserFormState } from './ducks/userForm/types';
import { LeadState } from './ducks/lead/types';
import { LeadStatusState } from './ducks/leadStatus/types';
import { LeadSourceState } from './ducks/leadSources/types';
import { LeadDetailsState } from './ducks/lead/leadDetails/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';


export interface ApplicationState {
  loggedUser: LoggedUserState,
  user: UsersState,
  auth: AuthState
  facebookForms: FacebookFormsState,
  forms: FormState,
  userForm: UserFormState,
  lead: LeadState,
  leadStatus: LeadStatusState,
  leadSources: LeadSourceState,
  leadDetails: LeadDetailsState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
