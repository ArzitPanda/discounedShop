import { Button, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { add_product,empty_cart,remove_product,remove_specific_Product } from '../store/cartReducer'
import {NOT_ELIGIBLE} from "../Constant"
import style from '../styles/Cart.module.css'




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
        }
        else
        {
            messageApi.error("cart is empty",3)
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
   




<>

{contextHolder}

    <div>
        <Navbar/>
        <div className={style.container}>
        <div className={style.productContainer}>      {
          Cart?  Cart.map((ele)=>{
                    return(<div key ={ele.id} className={style.productItem}>
                            <div className={style.imageContainer}> 
                                <img src={ele.imgLink} alt="productImage"/>
                           
                            </div>
                            <div className={style.productDetail}>
                            <h1 className={style.name}>{ele.name}</h1>
                            <h4 className={style.price}>{ele.price}</h4>
                                <div className={style.buttonContainer}>
                                  <Button onClick ={()=>{addOneItem(ele)}}>+</Button>
                                  <div>{ele.quant}</div>
                                  <Button onClick ={()=>{removeOneItem(ele)}}>-</Button>

                                </div>
                            </div>

                        </div>)



            }):(<div>cart is empty</div>)
        }
        </div>
  <div className={style.checkOut}>

        <div className={style.totalPrice}>total amount {coupon?.coupon ? `${Math.floor(Total*0.9)} (discounted value)`:Total}</div>

        <Button onClick={requestCoupon}>RequestCoupon</Button>
        {
            coupon && (<div className={style.coupon}>
                    {coupon?.message}
<p>{coupon?.coupon}</p>

            </div>)
        }
        <Button onClick={placeOrder}>placeOrder</Button>

 </div>

       



    </div>
    </div>
    </>
  )
}

export default cart