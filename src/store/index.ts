import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import { TokenState } from './ducks/token/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: TokenState
}

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store, persistor};
