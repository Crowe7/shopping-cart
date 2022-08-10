import React, {useEffect, useState } from 'react'
import { AppShell, Title, Header, Box, MediaQuery, Button, Badge, createStyles } from '@mantine/core';
import { Outlet, Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { productInterface } from '../utils/productData';
import { useCartQuantity } from '../hooks/cartQuantity';
// function(arg: type): returnType how to type out function props
type MyProps = {
  cart?: productInterface[]
}

const useStyles = createStyles((theme) => ({
  navWrapper: {
    backgroundColor: "#eef7fa", 
    position: "sticky"
  },

  navContentWrapper: {
    display:"flex", 
    alignItems: "center",  
    justifyContent:"space-between", 
    '@media (max-width: 768px)': {justifyContent:"center"}
  },

  title: {
    color: "#1D3557"
  },

  buttonWrapper: {
    display: "flex"
  },

  homeButton: {
    marginRight:10, 
    width: 140
  },

  productsButton: {
    marginRight:20
  },

  checkoutWrapper: {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center"
  },

  checkoutButton: {
    height:45, 
    width: 45, 
    padding: 0, 
    fontSize:20, 
    borderRadius:"25px"
  },

  cartQuantity: {
    position: "absolute", 
    padding: 6, 
    marginTop: 28, 
    backgroundColor:"#fe6d73", 
    color:"white", 
    pointerEvents: "none"
  }


}))

export const Navbar = ({cart}: MyProps) => {
  const { classes } = useStyles() 

  const cartQuantity = useCartQuantity(cart)

  return (
    <AppShell
      padding={0}
      header={<Header height={80} p="xs" className={classes.navWrapper}>
                { <Box className={classes.navContentWrapper}>
                    <MediaQuery smallerThan={"sm"} styles={{display:"none"}}>
                      <Title className={classes.title} order={1}>Boardgame Haven</Title>
                    </MediaQuery>
                    <Box className={classes.buttonWrapper}>
                      <Button size='lg' className={classes.homeButton} component={Link} to='/'>Home</Button>
                      <Button size='lg' className={classes.productsButton} component={Link} to='/products'>Products</Button>
                      <Box className={classes.checkoutWrapper}>
                        <Button aria-label='Checkout' className={classes.checkoutButton} component={Link} to='/checkout'><FontAwesomeIcon icon={faCartShopping} /></Button>

                        {cartQuantity !== undefined && cartQuantity > 0 &&
                          <Badge aria-label='Quantity' className={classes.cartQuantity} size='md'>{`${cartQuantity}`}</Badge>
                        }
                                            
                      </Box>
                    </Box>
                  </Box>
                }
              </Header>}
    >
      
      <Outlet/>
    </AppShell>
  )
}
