import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMagazine = createAsyncThunk(
  "/magazine/fetchMagazine",
  async () => {
    const data = await fetch("/api/db/magazine");
    const res = await data.json();
    return res;
  }
);
const MagazineSlice = createSlice({
  name: "magazine",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMagazine.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMagazine.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMagazine.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default MagazineSlice.reducer;
