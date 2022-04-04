import { Box, Button, SimpleGrid, Title } from '@mantine/core'
import React, { MouseEventHandler } from 'react'
import { productInterface } from '../utils/productData'
import { Link } from 'react-router-dom'
type MyProps = {
  cart: productInterface[],
  addToCart: Function,
  removeFromCart: Function,
  clearCart: MouseEventHandler<HTMLButtonElement>,
  value: number
}


export const Checkout = ({cart, addToCart, removeFromCart, clearCart, value}: MyProps) => {
  if(cart.length > 0) {
    //remove all duplicates from an array of objects with filter.. use a map for large data sets!
    let uniqueProducts = cart.filter((product, idx, self) => 
      self.findIndex(p => p.Name === product.Name) === idx);

    return (
      <Box>
        <SimpleGrid cols={1} spacing="xl" >
          {uniqueProducts.map((product) => {
              let quantity = cart.filter(p => p.Name === product.Name).length
              return  <Box key={product.Name}>
                <Title order={1}>{product.Name}</Title>
                <Title order={3}>{quantity}</Title>
              </Box>
            })
          }
        </SimpleGrid>
        <Box>
          <Title order={1}>{`Cart Total: $${value}`}</Title>
          <Button size='xl' onClick={clearCart}>Clear Cart</Button>
        </Box>
      </Box>
    )
  }
  return (
    <Box sx={{ width: "100vw", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
      <Title order={1}>Your Cart Is Empty! </Title>
      <Button sx={{marginTop: 20}} size='xl' component={Link} to='/products'>Shop Products</Button>
    </Box>
  )
}


