import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { TemplateListProps } from "./TemplateList";
import axios from "axios";

const initialState: TemplateListProps = {
  list: [],
};

export const templateAsync = createAsyncThunk(
  "templateList/getTemplateList",
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

export const templateList = createSlice({
  name: "templateList",
  initialState,
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

export const templateListSliceAction = templateList.actions;
export const selectTemplateList = (state: RootState) => state.templateList;
