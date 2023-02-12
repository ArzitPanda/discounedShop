import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Column =[
   
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
   
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
    
      {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'image',
        dataIndex: 'imLink',
        key: 'imgLink',
        render: (_,elem) => <img src={elem.imgLink} alt="" className="w-10 h-10 object-contain"/>
      },
     
     
]



const ProductTable = ({products}) => {


const Products=products
console.log(products)


  return (
   <Table  dataSource={Products} columns={Column} />
  )
}

export default ProductTable