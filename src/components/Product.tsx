import React from 'react'
import { useParams } from 'react-router-dom'
import {getProduct} from '../utils/data'
import { productInterface } from '../utils/productData'
// function(arg: type): returnType how to type out function props

type MyProps = {
  addToCart(name: string) : void
}

export const Product = ({addToCart}: MyProps) => {
  let params = useParams();
  let productInfo: null | productInterface = null
  
  try {
    productInfo = getProduct(params.productID)
  } catch(error) {
    productInfo = null
  }

  if(productInfo) {  
    return (
      <h1>{productInfo.Name}</h1>
    )
  }
  return (
    <h1>error</h1>
  )
}

