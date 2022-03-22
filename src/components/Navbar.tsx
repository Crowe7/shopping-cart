import React, { MouseEventHandler, useEffect, useState } from 'react'
import { AppShell, Title, Header, Box, MediaQuery, Button, Badge } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { productInterface } from '../utils/productData';
// function(arg: type): returnType how to type out function props
type MyProps = {
  cart?: productInterface[]
}


export const Navbar = ({cart}: MyProps) => {
  const history = useNavigate();
  const [CartQuantity, setCartQuantity] = useState(cart?.length)



  useEffect(() => {
    setCartQuantity(cart?.length)
  }, [cart])

  console.log()
  return (
    <AppShell
      padding={"md"}
      header={<Header height={80} p="xs">
                { <Box sx={{display:"flex", alignItems: "center",  justifyContent:"space-between", '@media (max-width: 755px)': {justifyContent:"center"} }}>
                    <MediaQuery smallerThan={"sm"} styles={{display:"none"}}>
                      <Title sx={{}} order={1}>Boardgame Haven</Title>
                    </MediaQuery>
                    <Box sx={{display: "flex"}}>
                      <Button size='lg' sx={{marginRight:10, width: 140}} onClick={() => history('/')}>Home</Button>
                      <Button size='lg' sx={{marginRight:20}} onClick={() => history('/products')}>Products</Button>
                      <Box sx={{display: "flex", flexDirection: "column"}}>
                        <Button aria-label='Checkout' sx={{height:45, width: 45, padding: 0, fontSize:20, borderRadius:"25px" }} onClick={() => history('/checkout')}><FontAwesomeIcon icon={faCartShopping} /></Button>
                        {CartQuantity != undefined && CartQuantity > 0 &&
                          <Badge sx={{position: "absolute", width: 30, marginTop: 28}} size='md'>{`${CartQuantity}`}</Badge>
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
