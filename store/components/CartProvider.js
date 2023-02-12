import { add_all } from '@/store/cartReducer';
import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'

const CartProvider = ({children}) => {


const Dispatch =useDispatch()


useEffect(()=>{







    const data =JSON.parse(localStorage.getItem("cartuser"));
if(data)
    Dispatch(add_all(data))

else
{
    
}






},[])







  return (
<>{children}</>
  )
}

export default CartProvider