import { Button, Input, Modal ,message} from 'antd'
import axios from 'axios';
import React, { useState } from 'react'

const NthModal = ({setNth}) => {


const [msgapi,context]=message.useMessage();
const [val,setVal]=useState();
const [isModalOpen,setIsModalOpen] =useState(false)

const showModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };
const addNth=async ()=>{


try {
   await  axios.post("http://localhost:3000/nth",{nth:parseInt(val)})
    msgapi.success("sucessfully set nth value",2)
    setNth(val)
} catch (error) {
    
    msgapi.error("something went wrong",4)
}
setIsModalOpen(false);



}

  return (
    <>
    {context}
      <Button type="default" onClick={showModal}>
        set lucky customer
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={addNth} okButtonProps={{type:"default",title:"set nth value"}} onCancel={handleCancel}>
      


    
     <Input placeholder="enter the nth value" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
   
  
      </Modal>
    </>
  )
}

export default NthModal