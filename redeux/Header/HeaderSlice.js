import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHeader = createAsyncThunk("/header/fetchHeader", async () => {
  const data = await fetch("/api/db/menu");
  const res = await data.json();
  return res;
});
const HeaderSlice = createSlice({
  name: "header",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeader.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default HeaderSlice.reducer;
