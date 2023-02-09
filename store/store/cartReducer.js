
import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducer:{

        add_product:(state,action)=>{


            const idx =state.findIndex((elem)=>{return elem.id===action.payload.id})
              if(idx===-1)
              {
                    state.push(action.payload);
              }
            else
            {
                    state[idx].quant+=action.payload.quantity
            }

            return state;
            


        }
    }
})
export const  {add_product} = CartSlice.actions;
export default CartSlice.reducer