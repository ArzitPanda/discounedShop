const { uuid } = require("uuidv4");
const { orders } = require("../orders");
const { products } = require("../products");



let nthCustomer=2; //by default nth customer has the value 2




const getNth=(req,res)=>{


res.send({nth:nthCustomer})

}
const getNthCustomer =()=>{


return nthCustomer  //return the nth customer


}




const addProduct=(req,res)=>{

    const {name,price,imgLink} =req.body;


   
const id= uuid(); //generating productId

const product ={name,price,id,imgLink}
    products.push(product);  //push the profuct  into products array
    
res.status(400).json({message:"sucessfully added",product})

}

const getAllProducts = (req, res) =>
{
   
    //sending the products array
        res.send(products)
        
       
}
const setNthCustomer = (req, res) =>
{

    const {nth} =req.body;  

        nthCustomer=nth  //set the nthcustomer value
        res.status(200).json({nth:nthCustomer})

}

const getSellQuantity = (req,res)=>{
    let item={};

orders.map((ele)=>{ //iterate over orders to get the all items

ele.items.map((element,idx)=>{  //as items are also in array go throught ebery order items array

        if(element.id in item) { //if the product id present in item object then


                
            item[element.id] ={...item[element.id],quant: item[element.id].quant+element.quant}
            //desturcure the element and make increase in quantity

        }
        else
        {
            item[element.id] = element
            //directly push the element
        }

})


})
    res.send(item);


}


const deleteItem=(req,res)=>{


    const {id} =req.query
    const product = products.filter((elem)=>elem.id===id) //delete the item by id
    res.send({msg:"deleted"})


}


const getOrders =(req,res)=>{
    res.send(orders)

//getting all orders from order array

}




module.exports ={addProduct,getAllProducts,getSellQuantity,deleteItem,getOrders,setNthCustomer,getNthCustomer,getNth}