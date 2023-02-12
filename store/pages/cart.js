import { Button, message, Tag } from 'antd'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { add_product,empty_cart,remove_product,remove_specific_Product } from '../store/cartReducer'
import {NOT_ELIGIBLE} from "../Constant"
import style from '../styles/Cart.module.css'
import CartCard from '@/components/CartCard'




const cart = () => {
    const [messageApi, contextHolder] = message.useMessage();

const DisPatch =useDispatch()
const [coupon,setCoupn]=useState();
const Cart =useSelector(state=>state.cart);
const requestCoupon =()=>{
if(Cart.length>0)
{
    axios.get("http://localhost:3000/order/coupon").then(res=>{console.log(res)

        
    setCoupn(res.data)
    



}).catch((err)=>{

console.log(err)


})
}
else
{
        messageApi.warning("add some element to cart",3)
}
  



}




const cartTotal =()=>{
        if(Cart)
        {
            const data =Cart.reduce((accu,elem)=>{
              return  accu+elem.quant*elem.price
            },0);

            console.log(data)
            return data
        }
        else 
        return 0;




}


const placeOrder=()=>{
        if(Cart.length>0)
        {
            axios.post("http://localhost:3000/order/order",{

            couponUser:coupon?.coupon || "",  
            items:Cart
        
        
            }).then(res=>{
                console.log(res);
                DisPatch(empty_cart({}))
                
            setCoupn("")
            
            }).catch(err=>console.log(err))

            messageApi.info("sucessfully make order",3)
            localStorage.removeItem("cartuser")
        }
        else
        {
            messageApi.error("cart is empty",3)
        }
   




}


const Total = useMemo(() => cartTotal(), [Cart]);










  return (
   




<>

{contextHolder}

    <div>
        <Navbar/>
        <div className="font-semibold text-lg">your items</div>
        <div className="h-screen flex flex-col md:flex-row items-center gap-6">
        <div className="w-full h-full flex flex-col gap-4 justify-start">      {
          Cart.length>0?  Cart.map((ele)=>{
                    return(
                        <>
                          <CartCard elem={ele}/>
                        </>
                    )



            }):(<div className="w-full h-full text-xl flex items-center justify-center">cart is empty</div>)
        }
        </div>


        {Cart.length >0 &&  <div className={`w-full md:w-3/5 flex md:h-screen h-96 items-center flex-start flex-col p-4 gap-4 bg-slate-100 rounded-lg`}>

<div className={`text-lg font-semibold`}>total amount Rs. {coupon?.coupon ? `${Math.floor(Total*0.9)} (discounted value)`:Total}</div>
<div className="flex flex-roe items-center gap-4">
<Button onClick={requestCoupon}>RequestCoupon</Button>

<Button onClick={placeOrder}>placeOrder</Button>
</div>
{
    coupon && (<div className={`bg-slate-200 flex flex-col items-center flex-start pl-6`}>
           <Tag> {coupon?.message}</Tag>
<p>{coupon?.coupon}</p>

    </div>)
}
</div>}
 

       



    </div>
    </div>
    </>
  )
}

export default cart