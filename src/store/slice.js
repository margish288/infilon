import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch data from an API
export const getAllUser = createAsyncThunk("data/getAllUser", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const result = await response.json();
  return result;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
