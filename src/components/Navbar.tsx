import React, {useEffect, useState } from 'react'
import { AppShell, Title, Header, Box, MediaQuery, Button, Badge } from '@mantine/core';
import { Outlet, Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { productInterface } from '../utils/productData';
// function(arg: type): returnType how to type out function props
type MyProps = {
  cart?: productInterface[]
}


export const Navbar = ({cart}: MyProps) => {
  const [CartQuantity, setCartQuantity] = useState(cart?.length)



  useEffect(() => {
    setCartQuantity(cart?.length)
  }, [cart])

  return (
    <AppShell
      padding={0}
      header={<Header height={80} p="xs" sx={{backgroundColor: "#eef7fa", position: "sticky"}}>
                { <Box sx={{display:"flex", alignItems: "center",  justifyContent:"space-between", '@media (max-width: 768px)': {justifyContent:"center"} }}>
                    <MediaQuery smallerThan={"sm"} styles={{display:"none"}}>
                      <Title sx={{color: "#1D3557"}} order={1}>Boardgame Haven</Title>
                    </MediaQuery>
                    <Box sx={{display: "flex"}}>
                      <Button size='lg' sx={{marginRight:10, width: 140}} component={Link} to='/'>Home</Button>
                      <Button size='lg' sx={{marginRight:20}} component={Link} to='/products'>Products</Button>
                      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <Button aria-label='Checkout' sx={{height:45, width: 45, padding: 0, fontSize:20, borderRadius:"25px" }} component={Link} to='/checkout'><FontAwesomeIcon icon={faCartShopping} /></Button>
                        {CartQuantity !== undefined && CartQuantity > 0 &&
                          <Badge aria-label='Quantity' sx={{position: "absolute", padding:6 , marginTop: 28, backgroundColor:"#fe6d73", color:"white", pointerEvents: "none"}} size='md'>{`${CartQuantity}`}</Badge>
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
