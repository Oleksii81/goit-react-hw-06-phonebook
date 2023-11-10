import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from "./filterSlice";
import { contactsReducer } from './contactsSlice';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
  };
  
  const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  });
  
  const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);