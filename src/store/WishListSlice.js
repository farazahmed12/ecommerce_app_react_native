const {createSlice} = require('@reduxjs/toolkit');

const WishListSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addWishList(state, action) {
      state.push(action.payload);
    },
    removeWishList(state, action) {
      return state.filter(x => x.id != action.payload);
    },
  },
});

export const {addWishList, removeWishList} = WishListSlice.actions;
export default WishListSlice.reducer;
