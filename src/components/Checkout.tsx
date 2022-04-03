import React from 'react'
import { productInterface } from '../utils/productData'

type MyProps = {
  cart: productInterface[],
  addToCart: Function,
  removeFromCart: Function,
  clearCart: Function
}


export const Checkout = ({cart, addToCart, removeFromCart, clearCart}: MyProps) => {
  return (
    <div>Checkout</div>
  )
}


