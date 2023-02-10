import { Menu } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';



const Navbar = () => {




const colorConstant =(path)=>{


  if(path===router.pathname)
  {
      return `blue`
  }
  else
  {
    return `black`
  }


}
    const router =useRouter()

// console.log(router)


  return (
    <div style={{width:'100%',backgroundColor:'#FFFFFF',height:50,display:'flex',justifyContent:'space-between'}}>
    <div>myStore</div>
   <Menu

      
        items={[{label:"cart",key:'order',
        
          style:{
            animation:'both',
            accentColor:'ActiveBorder',
            color:colorConstant("/cart")           },
        onClick:(e)=>{

router.push("/cart")

}},{label:"home",

color:colorConstant('/') ,
key:'home',

 popupOffset:3
,onClick:(e)=>{

              router.push("/")

        }},]}
        mode="horizontal"
   />
   </div>
  )
}

export default Navbar
