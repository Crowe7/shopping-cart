import { Box, Button, SimpleGrid, Title } from '@mantine/core'
import React, { MouseEventHandler } from 'react'
import { productInterface } from '../utils/productData'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
// function(arg: type): returnType how to type out function props
type MyProps = {
  cart: productInterface[],
  addToCart(name: string): MouseEventHandler<HTMLButtonElement>,
  removeFromCart(name:string): MouseEventHandler<HTMLButtonElement>,
  clearCart: MouseEventHandler<HTMLButtonElement>,
  value: number,
  itemValue(name:string): void,
  removeAllSameItems(name:string): MouseEventHandler<HTMLButtonElement>,
}


export const Checkout = ({cart, addToCart, removeFromCart, clearCart, value, itemValue, removeAllSameItems}: MyProps) => {
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
                <Box>
                  <Title order={1}>{product.Name}</Title>
                  <Box sx={{
                    backgroundImage: `url(${product.Img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: 100, 
                    height: 100, 
                    '@media (max-width: 880px)': {width: 50} 
                  }}>
                  </Box>
                  <Box sx={{display:"flex",  width: 100, justifyContent: "space-around"}}>
                    <Button size='xs' onClick={removeFromCart(product.Name)} sx={{fontSize: "16px"}} variant="subtle"><FontAwesomeIcon icon={faAngleLeft}/></Button>
                    <Title order={3}>{quantity}</Title>
                    <Button size='xs' onClick={addToCart(product.Name)} sx={{fontSize: "16px"}} variant="subtle"><FontAwesomeIcon icon={faAngleRight}/></Button>
                  </Box>
                </Box>
                <Box>
                  <Title order={2}>{`Item Total: $${itemValue(product.Name)}`}</Title>
                  <Button size='lg' onClick={removeAllSameItems(product.Name)}>Remove From Cart</Button>
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


