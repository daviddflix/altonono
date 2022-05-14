import { applyMiddleware, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import appReducer from './reducers';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = legacy_createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

  
export const persistor = persistStore(store)

 




 

 

 

