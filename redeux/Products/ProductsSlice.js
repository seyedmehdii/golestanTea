import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  async () => {
    const data = await fetch("/api/db/products");
    const res = await data.json();
    return res;
  }
);
const ProductsSlice = createSlice({
  name: "products",
  initialState: { posts: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "error";
      });
  },
});
export default ProductsSlice.reducer;
