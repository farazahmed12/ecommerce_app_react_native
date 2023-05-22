import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// slice
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: '',
    quantity: 0,
  },
  // reducers: {
  //   setQuantity(state, action){
  //     state.quantity = action.payload
  //   }
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchproducts.pending, (state, action) => {
        state.status = 'LOADING';
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'IDLE';
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.status = 'ERROR';
      });
  },
});

// actions and reducers
export const {setProducts, setStatus, } = productsSlice.actions;
export default productsSlice.reducer;

export const fetchproducts = createAsyncThunk('products/thunk', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});
