// 当前这个切片， 需要维护一个状态库
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface CounterState {
  value: number;
  user: string;
  status: "idle" | "loading" | "failed";
  // 闲置 加载中 已失败
}

const initialState: CounterState = {
  value: 0,
  user: "shen",
  status: "idle",
};

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 5000)
  );
}

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
        console.log("loading :>> ", "loading");
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("idle :>> ", "idle");
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        console.log("failed :>> ", "failed");
        state.status = "failed";
      });
  },
});

const { setUser } = counterSlice.actions;
// { increment, decrement }
export const counterSliceActions = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
