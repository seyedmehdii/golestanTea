import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRice = createAsyncThunk("/rice/fetchRice", async () => {
  const data = await fetch("/api/db/rice");
  const res = await data.json();
  return res;
});
const RiceSlice = createSlice({
  name: "rice",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRice.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRice.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRice.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default RiceSlice.reducer;
