import { Button, Input, Layout, Table, Tabs } from 'antd'
import axios from 'axios';
import { addProduct } from '../store/productReducers'
import styles from '../styles/Admin.module.css'


const {Header,Content,Footer,Sider} =Layout 





import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CouponList from '@/components/CouponList';

const admin = () => {


const[name,setName]=useState("");
const[price,setPrice]=useState(0);
const[img,setImg]=useState("");
const Dispatch =useDispatch()

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
    children: `Content of Tab Pane 3`,
  },
];



const addProduct =()=>{

        axios.post("http://localhost:3000/",{

                name,price:parseInt(price),imgLink:img

        }).then((res)=>{
                console.log(res.data);



        }).catch(err=>{console.log(err)})


            setName("");
            setPrice(0);
            setImg("");
}

  return (
    <Layout style={{
        height:'100vh',
       
      
    }}
    >
    <Sider
   width={350}
   style={{backgroundColor:'white',display:'flex',justifyContent: 'center',alignItems: 'center'}}
     > 


     <div style={{width:'100%',height:'100%',
     
     backgroundColor:'white',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
     <div style={{width:300,display:'flex',alignItems: 'center',flexDirection: 'column',rowGap:20}}>
            <Input addonBefore="name:"  placeholder='enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
             <Input addonBefore="price:"  type="number" placeholder='enter product price'  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
             <Input addonBefore="imglink:"  placeholder='enter product link' value={img} onChange={(e)=>{setImg(e.target.value)}} />
                <Button onClick={addProduct}>add to product</Button>
            </div>
     </div>
            </Sider>
    <Layout>
      <Header style={{backgroundColor:'white'}} >
        <div className={styles.Header}>ADMIN PANEL</div>
      </Header>
      <Content className={styles.Content}>
   

      <Tabs defaultActiveKey="1" items={itemsKey} onChange={(key)=>{console.log(key)}} />

      </Content>
   
    </Layout>
  </Layout>
  )
}

export default admin