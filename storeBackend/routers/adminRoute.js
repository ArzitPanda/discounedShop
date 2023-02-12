const express =require('express');


const { addProduct, getAllProducts, getSellQuantity, deleteItem, getOrders, setNthCustomer } = require('../controllers/adminController.js');


const adminRouter =express.Router();



adminRouter.post("/",addProduct)
//adding the product which will added by the seller



adminRouter.get("/",getAllProducts)
//geting all the product listed by the seller

adminRouter.get("/quant",getSellQuantity)
//get all the individually   selling quantity of the products  



adminRouter.delete("/:id",deleteItem)
//delete  the item by id




adminRouter.post("/nth",setNthCustomer)
//set the nth customer which will get the discount of 10%



adminRouter.get("/orders",getOrders)
//get all the orders which will take placed



module.exports ={adminRouter}
