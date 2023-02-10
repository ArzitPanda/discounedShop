import { Button } from 'antd'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { add_product,empty_cart,remove_product,remove_specific_Product } from '../store/cartReducer'
import {NOT_ELIGIBLE} from "../Constant"
const cart = () => {


const DisPatch =useDispatch()
const [coupon,setCoupn]=useState();
const Cart =useSelector(state=>state.cart);
const requestCoupon =()=>{

    axios.get("http://localhost:3000/order/coupon").then(res=>{console.log(res)

        
            setCoupn(res.data)
            
      


}).catch((err)=>{

console.log(err)


    })



}

const[total,setTotal]=useState(0);

const [couponId,setCouponId]=useState("");
const cartTotal =()=>{
        if(cart)
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
                
            
            
            }).catch(err=>console.log(err))
        }
   




}


const Total = useMemo(() => cartTotal(), [Cart]);




        const addOneItem=(elem)=>{


            DisPatch(add_product({...elem,quant:1}))


        }

        const removeOneItem=(elem)=>{

                DisPatch(remove_product({id:elem.id}))



        }
        const removeOneItemTotal=(elem)=>{

            DisPatch(remove_specific_Product({id:elem.id}))




    }






  return (
   








    <div>
        <Navbar/>
        {
            Cart.map((ele)=>{
                    return(<div key ={ele.id}>
                            {ele.id}
                            {ele.quant}
                            <Button onClick ={()=>{addOneItem(ele)}}>+</Button>
                            <Button onClick ={()=>{removeOneItem(ele)}}>-</Button>



                    </div>)



            })
        }

        <div>total amount {coupon?.coupon ? `${Math.floor(Total*0.9)} (discounted value)`:Total}</div>

        <Button onClick={requestCoupon}>RequestCoupon</Button>
        {
            coupon && (<div>
                    {coupon?.message}
<p>{coupon?.coupon}</p>

            </div>)
        }

        <Button onClick={placeOrder}>placeOrder</Button>



    </div>
  )
}

export default cart