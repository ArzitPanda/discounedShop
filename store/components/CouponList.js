import { Table } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CouponList = () => {
const [coupon,setCoupon]=useState([]);



const Column =[
    {
        title: 'Coupon-code',
        dataIndex: 'coupon',
        key: 'coupon',
      },
      {
        title: 'order',
        dataIndex: 'orderId',
        key: 'orderId',
      },
      {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
      },
     
]


useEffect(()=>{


axios.get("http://localhost:3000/order/couponlist").then(res=>


{
   const data = Object.keys(res.data).map((ele)=>{


            return{ coupon:ele,...res.data[ele]}

    })
    console.log(data);
    setCoupon(data)
}


).catch(err=>console.log(err))


},[])



  return (
    <div>

        <Table dataSource={coupon} columns={Column}/>
    </div>
  )
}

export default CouponList