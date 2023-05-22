import { createSlice  } from '@reduxjs/toolkit';
    

const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
          return  state.filter(x => x.id != action.payload)
        },
        setQuantity(state, action){
            state.data.quantity = action.payload
        }
    }
})

export const {add , remove, setQuantity} = cartSlice.actions;
export default cartSlice.reducer;