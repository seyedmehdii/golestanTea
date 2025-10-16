import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQore = createAsyncThunk("/qore/fetchQore", async () => {
  const data = await fetch("/api/db/qore");
  const res = await data.json();
  return res;
});
const QoreSlice = createSlice({
  name: "qore",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQore.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchQore.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQore.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default QoreSlice.reducer;
