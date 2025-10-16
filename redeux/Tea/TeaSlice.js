import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTea = createAsyncThunk("/tea/fetchTea", async () => {
  const data = await fetch("/api/db/tea");
  const res = await data.json();
  return res;
});
const TeaSlice = createSlice({
  name: "tea",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTea.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTea.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTea.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default TeaSlice.reducer;
