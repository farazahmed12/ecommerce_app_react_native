import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './productsSlice';
import CartReducer from './cartSlice';
import WishListReducer from './WishListSlice';
import UserReducer from './userSlice';

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
    user: UserReducer,
  },
});

export default store;
