import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    setUser(state = initialState, action) {
      state.user = action.payload;
    },
    removeUser(state, action) {
      state.user = {};
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
