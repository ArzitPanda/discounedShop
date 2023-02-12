import { Button, Input, Modal } from 'antd';
import { useState } from 'react';
const AddProductModal = ({setName,setPrice,setImg,addProduct,name,price,img,isModalOpen,setIsModalOpen}) => {

  const showModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
  
    <>
      <Button type="default" onClick={showModal}>
        add product
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={addProduct} okButtonProps={{name:"add a product",type:"default"}} onCancel={handleCancel}>
      


    
     <div style={{width:300,display:'flex',alignItems: 'center',flexDirection: 'column',rowGap:20}}>
            <Input addonBefore="name:"  placeholder='enter product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
             <Input addonBefore="price:"  type="number" placeholder='enter product price'  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
             <Input addonBefore="imglink:"  placeholder='enter product link' value={img} onChange={(e)=>{setImg(e.target.value)}} />
             
            </div>
  
      </Modal>
    </>
    
  );
};
export default AddProductModal;