import { Button, Input, Layout } from 'antd'
import axios from 'axios';
const {Header,Content,Footer,Sider} =Layout 

import React, { useState } from 'react'

const admin = () => {


const[name,setName]=useState("");
const[price,setPrice]=useState(0);
const[img,setImg]=useState("");


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


     <div style={{width:'100%',height:'100%',backgroundColor:'white',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
     <div style={{width:300,display:'flex',alignItems: 'center',flexDirection: 'column',rowGap:20}}>
            <Input addonBefore="name:"  placeholder='enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
             <Input addonBefore="price:"  type="number" placeholder='enter product price'  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
             <Input addonBefore="imglink:"  placeholder='enter product link' value={img} onChange={(e)=>{setImg(e.target.value)}} />
                <Button onClick={addProduct}>add to product</Button>
            </div>
     </div>
            </Sider>
    <Layout>
      <Header style={{backgroundColor:'white'}}>Header</Header>
      <Content style={{backgroundColor:'white'}}>Content</Content>
      <Footer style={{backgroundColor:'white'}} >Footer</Footer>
    </Layout>
  </Layout>
  )
}

export default admin