 import axios from 'axios'
import React, { useEffect, useState } from 'react'
 
 const ProductPage = () => {

  const [products, setProducts]=useState([])

  const fetchProduct=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((result)=>{
      console.log(result.data);
      
setProducts(result.data)
    })
  }

  useEffect(()=>{
    fetchProduct()
  },[])
   return (
     <div>
{products.map(({title,image,id,price})=>{
return(
 <div className='flex flex-col border rounded-lg border-black gap-2 p-4 m-4 shadow-lg w-80' key={id}  >
   <img src={image} alt={title} width={100} height={100} />
   <hr />
   <p>{title}</p>
   <hr />
   <p> price : {price} $</p>

 </div>
)
})}
     </div>
   )
 }
 
 export default ProductPage