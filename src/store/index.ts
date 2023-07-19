import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import launchesReducer from "./slices/launches";

export const store = configureStore({
  reducer: {
    launches: launchesReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
