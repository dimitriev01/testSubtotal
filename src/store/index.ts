import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { launchesApi } from '../services/launches';

const rootReducer = combineReducers({
  [launchesApi.reducerPath]: launchesApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(launchesApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
