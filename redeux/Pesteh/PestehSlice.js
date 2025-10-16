import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPesteh = createAsyncThunk("/pesteh/fetchPesteh", async () => {
  const data = await fetch("/api/db/pesteh");
  const res = await data.json();
  return res;
});
const PestehSlice = createSlice({
  name: "pesteh",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPesteh.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPesteh.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPesteh.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default PestehSlice.reducer;
