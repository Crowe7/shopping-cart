import { Box, Button, Title } from '@mantine/core'
import React from 'react'
import { productInterface } from '../utils/productData'
import { Link } from 'react-router-dom'
type MyProps = {
  cart: productInterface[],
  addToCart: Function,
  removeFromCart: Function,
  clearCart: Function
}


export const Checkout = ({cart, addToCart, removeFromCart, clearCart}: MyProps) => {
  if(cart.length > 0) {
    return (
      <div>Checkout</div>
    )
  }
  return (
    <Box sx={{ width: "100vw", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
      <Title order={1}>Your Cart Is Empty! </Title>
      <Button sx={{marginTop: 20}} size='xl' component={Link} to='/products'>Shop Products</Button>
    </Box>
  )
}


