
import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{



        add_all:(state,action)=>{

                state=action.payload
                return state


        },

        add_product:(state,action)=>{


            const idx =state.findIndex((elem)=>{return elem.id===action.payload.id})
              if(idx===-1)
              {
                    state.push(action.payload);
              }
            else
            {
                    state[idx].quant=action.payload.quant+state[idx].quant
            }
                return state;
        

        },



            remove_specific_Product:(state,action)=>{
                state=state.filter((elem)=>elem.id !==action.payload.id)
                    
                    return state;

            },

            empty_cart:(state,action)=>{
                    state=[];
                    return state;



            },
        remove_product:(state,action)=>{


            const idx =state.findIndex((elem)=>{return elem.id===action.payload.id})
              if(idx===-1)
              {
                   
              }
            else
            {       
                if(state[idx].quant===1)
                { state=  state.filter((elem)=>elem.id !==action.payload.id)

                }
                else
                {
                    state[idx].quant=state[idx].quant-1;
                }
            }
                return state;
        

        }
    }
})
export const  {add_product, remove_specific_Product, remove_product,empty_cart,add_all} = CartSlice.actions;
export default CartSlice.reducer