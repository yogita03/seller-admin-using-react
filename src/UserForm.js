import React, { useState } from 'react'

const UserForm = (props) => {
  const [productId , setProductId] = useState('')
  const [productPrice , setProductPrice] = useState('')
  const [productName , setProductName] = useState('')
  const [ toggle , SetToggel] = useState(false)

  const submitHandler=(e)=>{
    e.preventDefault();
    let data = {
      id:productId,
      price:productPrice,
      name:productName
    }
    localStorage.setItem(data.id , JSON.stringify(data))
    SetToggel(!toggle)
    props.toggleData(data)
    setProductId('')
    setProductName('')
    setProductPrice('')
  }

  return (
    <div className='container'>
    <form className='form' onSubmit={submitHandler}>
    <label className='form-label' >Product ID</label>
    <input type='number' className='form-control' value={productId} onChange={(e)=>setProductId(e.target.value)}/>
    <label className='form-label'>Selling Price</label>
    <input type='number' className='form-control' value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
    <label className='form-label'>Product Name</label>
    <input type='text' className='form-control' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
    <button className='btn btn-success mt-2'>Add Product</button>
    </form>
    </div>
  )
}

export default UserForm