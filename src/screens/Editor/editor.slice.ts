import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { textDefaultProps } from "Component/default.props";

export interface ComponentProps {
  props: { [key: string]: any };
}
export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  type: string;
  name: string;
}
// 整个编辑器的状态
export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是哪个元素
  currentElement: string;
}

export const initialState: ComponentData[] = [
  {
    id: uuidv4(),
    name: "l-text",
    type: "text",
    props: {
      ...textDefaultProps,
      text: "hello",
      fontSize: "20px",
      color: "blue",
    },
  },
  {
    id: uuidv4(),
    name: "l-text",
    type: "text",
    props: {
      ...textDefaultProps,
      text: "hello2",
      fontSize: "18px",
      color: "cadetblue",
      fontWeight: "bold",
      actionType: "url",
      url: "https://www.baidu.com",
    },
  },
  {
    id: uuidv4(),
    name: "l-text",
    type: "text",
    props: {
      ...textDefaultProps,
      text: "hello3",
      fontSize: "30px",
      color: "lightpink",
    },
  },
];

console.log("testComponents :>> ", initialState);

// -----
// 当前这个切片， 需要维护一个状态库

export const templateAsync = createAsyncThunk(
  "Editor/getEditor",
  async (item: string) => {
    console.log("item11111 :>> ", item);
    axios
      .get("//localhost:3007/templates", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        console.log("response :>> ", response);
      })
      .catch(function (error) {
        console.log("error :>> ", error);
      });
  }
);

export const EditorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    additionComponent: (state, action) => {
      console.log("action :>> ", action);
      state.push({
        id: uuidv4(),
        name: "l-text",
        type: action.payload.type,
        props: {
          ...textDefaultProps,
          text: "hello3",
          fontSize: "30px",
          color: "lightpink",
          ...action.payload,
        },
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(templateAsync.pending, (state) => {
        console.log("pending :>> ", state);
      })
      .addCase(templateAsync.fulfilled, (state, action) => {
        console.log("fulfilled :>> ", state, action);
      })
      .addCase(templateAsync.rejected, (state) => {
        console.log("state :>> ", state);
      });
  },
});

export const editorSliceAction = EditorSlice.actions;
export const selectEditor = (state: RootState) => state.components;

// --------- --------- ---------

export const CurrentElementSlice = createSlice({
  name: "currentElement",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(templateAsync.pending, (state) => {
        console.log("pending :>> ", state);
      })
      .addCase(templateAsync.fulfilled, (state, action) => {
        console.log("fulfilled :>> ", state, action);
      })
      .addCase(templateAsync.rejected, (state) => {
        console.log("state :>> ", state);
      });
  },
});

export const CurrentElementSliceAction = CurrentElementSlice.actions;
export const selectCurrentElement = (state: RootState) => state.components;
