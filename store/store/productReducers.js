import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    initialState:[],
    name:'products',
    reducers:{

            addProduct:(state,action)=>{

                    state=action.payload
                    return state


            }



    }
})


export const   {addProduct} =productsSlice.actions
export default productsSlice.reducer