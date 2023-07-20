import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { launchesApi } from '../services/launches';

const rootReducer = combineReducers({
  [launchesApi.reducerPath]: launchesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(launchesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
