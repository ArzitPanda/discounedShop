const { uuid } = require("uuidv4");
const { orders } = require("../orders");
const { getNthCustomer } = require("./adminController");







let orderNo=1;
//create the instance of orderNo and make it 1 because the first order count is 1 and when the order take place the orderNo is 1
//and then the nextorderno will increase by 1



let coupon=uuid()
//create the couponcode


let CouponCodeList ={};
//no of coupon listed along with the ordernoo attach with



const getCoupon =(req,res)=>{

    if(orderNo%getNthCustomer()!==0 )  //if the orderno is not completely divisable by the nth value 
    {
        res.send({message:"not eligble for coupon"}) //then send the inelgibilty for coupon
    }
    else  //if the orderno is not completely divisable by the nth value 
    {   
       
        res.send({message:"eligible for discount",coupon}) 
        //send the userEliginble msg along with the coupon code
    
    }
    
    
    
    }



const getCouponList =(req,res)=>{

    res.send(CouponCodeList)

    //it sends all the couponlist as an objects of object
    //each object has the key which is couponid and the values are orderId and discounted value
    
    }


const isCorrectCoupon =(req,res)=>{
//check the coupon code is validate or not
    const {couponId} = req.query
if(couponId===coupon)
{
    res.send({msg:"VALIDATE",coupon})
}
else
{
    res.send({msg:'BAD_COUPON'})
}

}

const createOrder =(req,res)=>{

    const {couponUser,items} = req.body  //get the couponid and products in the cart along with quantity
    //if user has no coupon then send couponuser is null
    
    const orderId =uuid() //create an orderId
    let totalValue = 0
    items.forEach(element => {
        totalValue+=element.price*element.quant
    });
  //get the total value without applying coupin
    if(couponUser !== "")  //check user has coupon or not
    {
        if(couponUser===coupon) //if had check it is valid or not
        {const discount=Math.floor(totalValue*0.1)
            CouponCodeList[coupon] ={orderId,discount}
            totalValue=totalValue-discount //if valid make a 10% discount
                
    
    
                const order ={orderId,coupon:coupon,items,totalValue} //create the orderObject along with the orderId,and coupon
    
                orders.push(order)
                orderNo++; //make orderno increase by 1
                coupon=uuid() //create a new coupon for the nextnth customer

                res.send({msg:"SUCESSFUL_ORDER",order})
                //sent the sucessmsg with the ordergenerated
    
        }
        else
        {
            res.send({msg:"BAD_COUPON"})
        }
    }
    else
    {

        //same procedure without coupon 
        const order ={orderId,coupon:"",items,totalValue}
        
        orders.push(order)
        orderNo++;
        res.send({msg:"SUCESSFUL_ORDER",order})
    
    }
    
    
    
    
    
    }




    module.exports ={getCoupon,getCouponList,isCorrectCoupon,createOrder}