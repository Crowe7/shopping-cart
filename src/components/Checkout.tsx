import { Box, Button, SimpleGrid, Title } from '@mantine/core'
import React, { MouseEventHandler } from 'react'
import { productInterface } from '../utils/productData'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
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
      <Box sx={{display: "flex", 
                border: "1px solid black", 
                justifyContent: "center",
                alignItems: "center"
              }}>
        <SimpleGrid cols={1} spacing="xl" sx={{border: "1px solid black", width: "700px", height: "80vh", marginTop: "6vh"}} >
          {uniqueProducts.map((product) => {
              let quantity = cart.filter(p => p.Name === product.Name).length
              return  <Box key={product.Name} sx={{border:"1px solid black"}}>

                <Title order={1}>{product.Name}</Title>
                <Box sx={{
                  backgroundImage: `url(${product.Img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: 100, 
                  height: 100, 
                  '@media (max-width: 880px)': {width: 50} 
                }}>
        </Box>
                <Box sx={{display:"flex",}}>
                  <Button size='xs' onClick={removeFromCart(product.Name)} sx={{fontSize: "16px", padding: 4}} variant="subtle"><FontAwesomeIcon icon={faAngleLeft}/></Button>
                  <Title order={3}>{quantity}</Title>
                  <Button size='xs' onClick={addToCart(product.Name)} sx={{fontSize: "16px", padding: 4}} variant="subtle"><FontAwesomeIcon icon={faAngleRight}/></Button>
                </Box>
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


