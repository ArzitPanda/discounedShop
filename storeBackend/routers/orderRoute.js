const express= require('express');
const { uuid } = require('uuidv4');
const { orders } = require('../orders');


const  orderRoute  =express.Router();


let orderNo=1;
let coupon=uuid()
let CouponCodeList ={};
orderRoute.get("/coupon",(req,res)=>{

if(orderNo%2!==0 )
{
    res.send({message:"not eligble for coupon"})
}
else
{   
   
    res.send({message:"eligible for discount",coupon})

}



})



orderRoute.get("/couponList",(req,res)=>{

res.send(CouponCodeList)

})



orderRoute.get("/checkout/:couponId",(req,res)=>{

    const {couponId} = req.query
if(couponId===coupon)
{
    res.send({msg:"VALIDATE",coupon})
}
else
{
    res.send({msg:'BAD_COUPON'})
}

})

orderRoute.post("/order",(req,res)=>{

const {couponUser,items} = req.body

const orderId =uuid()
let totalValue = 0
items.forEach(element => {
    totalValue+=element.price*element.quant
});
console.log(totalValue)
if(couponUser !== "")
{
    if(couponUser===coupon)
    {const discount=Math.floor(totalValue*0.1)
        CouponCodeList[coupon] ={orderId,discount}
        totalValue=totalValue-discount
            


            const order ={orderId,coupon:coupon,items,totalValue}

            orders.push(order)
            orderNo++;
            coupon=uuid()
console.log(order)
            res.send({msg:"SUCESSFUL_ORDER"})

    }
    else
    {
        res.send({msg:"BAD_COUPON"})
    }
}
else
{
    const order ={orderId,coupon:"",items,totalValue}
    
    orders.push(order)
    orderNo++;
    res.send({msg:"SUCESSFUL_ORDER"})

}





})


module.exports ={orderRoute}