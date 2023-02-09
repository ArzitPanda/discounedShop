import { Menu } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';



const Navbar = () => {





    




  return (
    <div style={{width:'100%',backgroundColor:'#FFFFFF',height:50,display:'flex',justifyContent:'space-between'}}>
    <div>myStore</div>
   <Menu

        
        items={[{label:"cart",key:'order'},{label:"home",key:'home'},]}
        mode="horizontal"
   />
   </div>
  )
}

export default Navbar
