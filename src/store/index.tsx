import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterSlice } from "../screens/project-list/project-list.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { counterSlice } from 'screens/project-list/project-list.slice';
// import type { RootState, AppDispatch } from './store';

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
