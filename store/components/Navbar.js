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
    <div className="w-full bg-slate-200 flex px-6 h-32 shadow-sm shadow-slate-400 items-center justify-between">
    <div className=" flex flex-col w-64 h-32 items-center justify-center gap-2">
      <div className="text-lg font-semibold"> NthDisccountStore</div>
      <div text-sm font-light>choose your luck</div>
    </div>
    <div className="px-6 py-2 rounded-lg bg-white">
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
   </div>
  )
}

export default Navbar
