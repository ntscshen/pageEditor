import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterSlice } from "../screens/project-list/project-list.slice";
import { templateList } from "../screens/home.slice";
import {
  EditorSlice,
  CurrentElementSlice,
} from "../screens/Editor/editor.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    templateList: templateList.reducer,
    components: EditorSlice.reducer,
    currentElement: CurrentElementSlice.reducer,
    // user: userSlice.reducer,
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
