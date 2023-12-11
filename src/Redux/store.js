import { configureStore } from '@reduxjs/toolkit';

import { userEmailReducer } from './userAuthSlice';
// import { updateUserTimestampsMiddleware } from "./middleware";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { chatReducer } from './chatSlice';
import { userTopArtistsReducer } from './newsSlice';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user'],
};



export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userEmailReducer),
    chat: chatReducer,
    topArtists: userTopArtistsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
