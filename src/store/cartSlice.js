import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
        console.log('state =>',state)
        const itemIndex = state.findIndex(
            (item) => item.id === action.payload.id
          );
          
          if (itemIndex !== -1) {
            state[itemIndex].quantity++;
          } else {
            state.push(action.payload);
          }
    },
    remove(state, action) {
      return state.filter(x => x.id != action.payload);
    },
  },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
