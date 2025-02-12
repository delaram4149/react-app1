import axios  from "axios"
import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import { Result } from "postcss"

const ProductList = () => {

    const [products,setProducts]=useState([])
    const fetchProduct=()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((result)=>{
        setProducts(result.data)
      })
      .catch((err)=>{
console.log(err);

      })
    }

 useEffect(()=>{
  fetchProduct()
},[])
 
  return (
    <div>
        {products.map((product)=>{

            
return <ProductItem key={product.id}  data={product}/>
        })}
    </div>
  )
}

export default ProductList