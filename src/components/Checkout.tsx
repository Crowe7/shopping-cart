import { Box, Button, createStyles, ScrollArea, SimpleGrid, Title } from '@mantine/core'
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
const useStyles = createStyles((theme) => ({
  emptyCartWrapper: {
    width: "100vw", 
    height: "90vh", 
    display: "flex", 
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px"
  },
  emptyCartButton: {
    marginTop: 20
  },


  cartWrapper: {
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    '@media (max-width: 1380px)': {flexDirection: 'column-reverse'}
  },

  scrollArea: {
    height: "90vh",
    '@media (max-width: 1380px)': {height: "80vh"},
    '@media (max-width: 980px)': {height: "70vh"}
  },

  gridWrapper: {
    width: "700px",
    marginTop: "6vh",
    marginLeft: "100px",
    '@media (max-width: 980px)': {marginLeft: 0}
  },

  productBoxWrapper: {
    height:"200px"
  },

  productTitle: {
    display: "flex",
    justifyContent: "center"
  },

  productWrapper: {
    display: "flex",
    justifyContent: "center"
  },

  addRemoveWrapper: {
    display:"flex",  
    width: 100, 
    justifyContent: "space-around"
  },

  addRemoveButton: {
    fontSize: "16px"
  },

  imgWrapper: {
    marginLeft: "275px",
    '@media (max-width: 1380px)': {marginLeft: 0}
  },

  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: 100, 
    height: 100, 
  },

  buttonWrapper: {
    display: "flex",  
    flexDirection: "column", 
    '@media (min-width: 1000px)': {marginLeft:"100px"}, 
    alignItems:"center", 
    marginBottom: "10px"
  },

  clearAndCheckoutWrapper: {
    display: "flex", 
    gap: "15px"
  },

  clearCart: {
    marginLeft:"70px"
  },


}))

export const Checkout = ({cart, addToCart, removeFromCart, clearCart, value, itemValue, removeAllSameItems}: MyProps) => {
  const { classes } = useStyles();
  if(cart.length > 0) {
    //remove all duplicates from an array of objects with filter.. use a map for large data sets!
    let uniqueProducts = cart.filter((product, idx, self) => 
      self.findIndex(p => p.Name === product.Name) === idx);

    return (
      <Box className={classes.cartWrapper}>
        <ScrollArea scrollbarSize={7} className={classes.scrollArea}>     
        <SimpleGrid cols={1} spacing="xl" className={classes.gridWrapper} >
          {uniqueProducts.map((product) => {
              let quantity = cart.filter(p => p.Name === product.Name).length
              return  <Box key={product.Name} className={classes.productBoxWrapper}>
                <Box className={classes.productTitle}>
                  <Title order={1}>{product.Name}</Title>
                </Box>
                <Box className={classes.productWrapper}>
                  <Box className={classes.imgWrapper}>
                    <Box sx={{backgroundImage: `url(${product.Img})`}} className={classes.img}>
                  </Box>
                    <Box className={classes.addRemoveWrapper}>
                      <Button size='xs' aria-label='remove' onClick={removeFromCart(product.Name)} className={classes.addRemoveButton} variant="subtle"><FontAwesomeIcon icon={faAngleLeft}/></Button>
                      <Title order={3}>{quantity}</Title>
                      <Button size='xs' aria-label='add' onClick={addToCart(product.Name)} className={classes.addRemoveButton} variant="subtle"><FontAwesomeIcon icon={faAngleRight}/></Button>
                    </Box>
                  </Box>
                  <Box className={classes.clearCart}>
                    <Title order={2}>{`Item Total: $${itemValue(product.Name)}`}</Title>
                    <Button size='lg' onClick={removeAllSameItems(product.Name)}>Remove From Cart</Button>
                  </Box>
                </Box>
              </Box>
            })
          }
        </SimpleGrid>
        </ScrollArea>   
        <Box className={classes.buttonWrapper}>
          <Title order={1}>{`Cart Total: $${value}`}</Title>
          <Box className={classes.clearAndCheckoutWrapper}>
            <Button size='xl' onClick={clearCart}>Clear Cart</Button>
            <Button size='xl' onClick={clearCart}>Checkout</Button>
          </Box>
        </Box>
      </Box>
    )
  }
  return (
    <Box className={classes.emptyCartWrapper}>
      <Title order={1}>Your Cart Is Empty! </Title>
      <Button className={classes.emptyCartButton} size='xl' component={Link} to='/products'>Shop Products</Button>
    </Box>
  )
}


