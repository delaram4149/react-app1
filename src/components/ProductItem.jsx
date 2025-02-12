import React from 'react'
import '../assets/style/style.css'

const ProductItem = ({data}) => {
//const {data} =props
   const {title,price,image}= data 
 
    
  return (
    <div className='product-card'>
        <img src={image} alt={title} width={100} height={100} />
        <h3>{title}</h3>
        <div>price:{price} $ </div>
    </div>
  )
}

export default ProductItem