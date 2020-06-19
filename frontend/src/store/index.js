
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers'

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage,
}

const persitedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persitedReducer, applyMiddleware(thunk, logger))
const persistor = persistStore(store)

export { store, persistor }