import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './productsSlice';
import CartReducer from './cartSlice';
import WishListReducer from './WishListSlice';

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
  },
});

export default store;
