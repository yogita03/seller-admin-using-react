import React, { useEffect, useState } from "react";

const ListProduct = (props) => {
    const [data , setData] =useState(Object.keys(localStorage))
  let price =0
  useEffect(()=>{
    setData(Object.keys(localStorage))
  },[props.tg])
  return (
    <>
    <div className='container mt-4'>
    <div className='card'>
    <ul className="list-group">
    { data.length ? (data.map((item)=>{
      let obj = JSON.parse(localStorage.getItem(item))
      console.log(obj)
      price+=Number(obj.price)
      return(
        <li class="list-group-item">{'Product Id ' + obj.id + ' Product Name ' + obj.name + ' Price is' + obj.price}
        <button className='btn btn-danger ms-4' onClick={()=>{
          localStorage.removeItem(obj.id)
          setData(Object.keys(localStorage))
          }
        }>Delete Item</button>
        </li>


      )
    })) : null }
  </ul>
    </div>
    </div>
    <h5 className="text-center mt-2">{'Total Product Price is '+price}</h5>
    </>
  )
}

export default ListProduct