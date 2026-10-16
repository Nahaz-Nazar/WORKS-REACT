
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { getState, rejectWithValue }) => {
    const { products, auth } = getState();

    if (products.status === 'succeeded') {
      return products.items;
    }

    const response = await fetch(
      'https://worksheet-product.mashupstack.com/product',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(
        data.message || data.detail || 'Unable to load products'
      );
    }

    return Array.isArray(data) ? data : data.products || [];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().products;
      return status !== 'loading' && status !== 'succeeded';
    },
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearProducts: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (action.meta.condition) return;
        state.status = 'failed';
        state.error =
          action.payload || action.error.message || 'Request failed';
      });
  },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
