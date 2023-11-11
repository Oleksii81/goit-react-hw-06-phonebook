import { configureStore } from '@reduxjs/toolkit';
//import { filterReducer } from "./filterSlice";
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
    blacklist: ['filter']
  };
  
  //const rootReducer = combineReducers({
   // contacts: contactsReducer,
   // filter: filterReducer,
 // });
  
  const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);