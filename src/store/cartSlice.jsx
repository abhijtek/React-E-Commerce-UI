import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
      add(state,action){
        state.push(action.payload)
      }, 

      remove(state, action){
        for(let i in state){
          if( state[i].id === action.payload){
            state.splice(i,1);
            break;
          }
        }
      }      
    }
});
export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;