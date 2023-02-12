import { Button, Input, Layout, Table, Tabs } from 'antd'
import axios from 'axios';
import { addProduct } from '../store/productReducers'
import styles from '../styles/Admin.module.css'

import { message } from 'antd';
const {Header,Content,Footer,Sider} =Layout 





import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CouponList from '@/components/CouponList';
import AddProductModal from '@/components/AddProductModal';
import ProductTable from '@/components/ProductTable';
import NthModal from '@/components/NthModal';

const admin = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Dispatch =useDispatch()
const sucess =()=>{

    messageApi.open(
{
      type: 'success',
      content: 'sucessfully added',
    }
    )


}
useEffect(()=>{



  axios.get("http://localhost:3000").then(res=>{
    
  
  Dispatch(addProduct(res.data)
  
  )
  
}).catch(err=>console.log(err))
  
  
 
  
  },[])

const[name,setName]=useState("");
const[price,setPrice]=useState(0);
const[img,setImg]=useState("");


const [products,setProducts]=useState([])
console.log(products)
const [items,setItems]=useState([])



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'sell Quantity',
    dataIndex: 'quant',
    key: 'quant',
  },
];
  


















useEffect(()=>{




  
  axios.get("http://localhost:3000/quant").then(res=>{
const item=Object.values(res.data)


const newItem =item.map((ele)=>{

    return{...ele,key:ele.id}

})

console.log(newItem)


setItems(newItem)


  }).catch(err=>console.log(err))






},[])

const [error,setError]=useState(false)

const addProducts =()=>{
if(name&&price&&img)
{

  axios.post("http://localhost:3000/",{

  name,price:parseInt(price),imgLink:img

}).then((res)=>{
  console.log(res.data);



}).catch(err=>{console.log(err);

setError(true)

})

if(error===false)
{
  messageApi.success("sucessfully added",2)
}
else
{
  messageApi.error("can not be added",2)
}
setName("");
setPrice(0);
setImg("");
setIsModalOpen(false)
}
else
{
  message.warning("can not be null",2)
}
       
}



  
const productsArray =useSelector(state=>state.products)

const itemsKey = [
  {
    key: '1',
    label: `ProductSell`,
    children: <div className={styles.itemsTable}>
   
       <Table dataSource={items} columns={columns} />;
      </div>,
  },
  {
    key: '2',
    label: `Coupon List`,
    children: <CouponList/>,
    
  },
  {
    key: '3',
    label: `Product Details`,
    children:   <div>

    <AddProductModal addProduct={addProducts} setImg={setImg} setName={setName} setPrice={setPrice} name={name} price={price} img={img}
    
    isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}

    
     />
         <ProductTable products={productsArray }/>
    
    </div>,
  },
];




const[nth,setNth]=useState(null)



useEffect(()=>{



axios.get("http://localhost:3000/nth").then(res=>{

  setNth(res.data.nth)


}).catch(err=>console.log(err))


},[])




  return (
    <>

 {contextHolder}

    <Layout className="w-full h-screen flex flex-col md:flex-row"
    >
    
    <Sider
   width={350}
className="bg-white w-full  items-center justify-center hidden lg:flex"
     > 


     <div className="w-full h-full items-center justify-center bg-white hidden lg:flex">
     <div style={{width:350,display:'flex',
     
     paddingRight:4,
     paddingLeft:4,
     alignItems: 'center',flexDirection:'column',rowGap:20,justifyContent:'center'}}>
            <Input addonBefore="name:"  placeholder='enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
             <Input addonBefore="price:"  type="number" placeholder='enter product price'  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
             <Input addonBefore="imglink:"  placeholder='enter product link' value={img} onChange={(e)=>{setImg(e.target.value)}} />
                <Button onClick={addProducts}>add to product</Button>
            </div>
     </div>
            </Sider>
    
    <Layout>
      <Header 
      style={{backgroundColor:"white"}}
      className={`bg-white flex flex-row items-center justify-between px-6`} >
        <div className={styles.Header}>ADMIN PANEL luckyValue: {nth}</div>
        <div className="flex flex-row gap-4">
       
        <NthModal setNth={setNth}/>
        </div>
      </Header>
      <Content className={styles.Content}>
   

      <Tabs defaultActiveKey="1" items={itemsKey} onChange={(key)=>{console.log(key)}} />

      </Content>
   
    </Layout>
   
  </Layout>
  </>
  )
}

export default admin