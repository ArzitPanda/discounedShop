const express =require('express');
const { products } = require('../products.js');
const { uuid } = require('uuidv4');
const { orders } = require('../orders.js');


const adminRouter =express.Router();



adminRouter.post("/",(req,res)=>{

        const {name,price,imgLink} =req.body;
const id= uuid();

const product ={name,price,id,imgLink}
        products.push(product);
        
res.status(400).json({message:"sucessfully added",product})

})
adminRouter.get("/",(req,res)=>{

res.send(products)

})

adminRouter.get("/quant",(req,res)=>{
        let item={};

orders.map((ele)=>{

    ele.items.map((element,idx)=>{

            if(element.id in item) {


                    
                item[element.id] ={...item[element.id],quant: item[element.id].quant+element.quant}

            }
            else
            {
                item[element.id] = element
            }

    })


})
        res.send(item);


})

adminRouter.delete("/:id",(req,res)=>{
const {id} =req.query
    const product = products.filter((elem)=>elem.id===id)
    res.send({msg:"deleted"})


})


adminRouter.get("/orders",(req,res)=>{
    res.send(orders)



})

module.exports ={adminRouter}
