const express =require('express');
const { adminRouter } = require('./routers/adminRoute');
const { orderRoute } = require('./routers/orderRoute');
const cors = require('cors')
const app =express();





app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/",adminRouter)

app.use("/order",orderRoute)
app.listen(3000,()=>{

console.log("listening port 3000")
        




})