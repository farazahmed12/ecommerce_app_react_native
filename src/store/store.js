import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './productsSlice'
import CartReducer from './cartSlice'


const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
});


export default store;
