import { Box, Button, ScrollArea, SimpleGrid, Title } from '@mantine/core'
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
                justifyContent: "center",
                alignItems: "center",
                '@media (max-width: 1380px)': {flexDirection: 'column-reverse'}
              }}>
        <ScrollArea scrollbarSize={7} sx={{height: "90vh", '@media (max-width: 1380px)': {height: "80vh"}, '@media (max-width: 980px)': {height: "70vh"}}}>     
        <SimpleGrid cols={1} spacing="xl" sx={{width: "700px", marginTop: "6vh", marginLeft: "100px", '@media (max-width: 980px)': {marginLeft: 0} }} >
          {uniqueProducts.map((product) => {
              let quantity = cart.filter(p => p.Name === product.Name).length
              return  <Box key={product.Name} sx={{height:"200px"}}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                  <Title order={1}>{product.Name}</Title>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                  <Box sx={{marginLeft: "275px", '@media (max-width: 1380px)': {marginLeft: 0}}}>
                    <Box sx={{
                      backgroundImage: `url(${product.Img})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: 100, 
                      height: 100, 
                    }}>
                    </Box>
                    <Box sx={{display:"flex",  width: 100, justifyContent: "space-around"}}>
                      <Button size='xs' aria-label='remove' onClick={removeFromCart(product.Name)} sx={{fontSize: "16px"}} variant="subtle"><FontAwesomeIcon icon={faAngleLeft}/></Button>
                      <Title order={3}>{quantity}</Title>
                      <Button size='xs' aria-label='add' onClick={addToCart(product.Name)} sx={{fontSize: "16px"}} variant="subtle"><FontAwesomeIcon icon={faAngleRight}/></Button>
                    </Box>
                  </Box>
                  <Box sx={{marginLeft:"70px"}}>
                    <Title order={2}>{`Item Total: $${itemValue(product.Name)}`}</Title>
                    <Button size='lg' onClick={removeAllSameItems(product.Name)}>Remove From Cart</Button>
                  </Box>
                </Box>
              </Box>
            })
          }
        </SimpleGrid>
        </ScrollArea>   
        <Box sx={{display: "flex", flexDirection: "column", '@media (min-width: 1000px)': {marginLeft:"100px"}, alignItems:"center", marginBottom: "10px"}}>
          <Title order={1}>{`Cart Total: $${value}`}</Title>
          <Box sx={{display: "flex", gap: "15px"}}>
            <Button size='xl' onClick={clearCart}>Clear Cart</Button>
            <Button size='xl' onClick={clearCart}>Checkout</Button>
          </Box>
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


