import React, { MouseEventHandler } from 'react'
import { AppShell, Title, Header, Box } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom'

// function(arg: type): returnType how to type out function props



export const Navbar = () => {
 const history = useNavigate();

 return (
    <AppShell
      padding={"md"}
      header={<Header height={80} p="xs">
                { <Box sx={{display:"flex", alignItems: "center", justifyContent:"space-between" }}>
                    <Title sx={{}} order={1}>Boardgame Haven</Title>
                    <Box>
                      <button onClick={() => history('/')}>Home</button>
                      <button onClick={() => history('/products')}>Products</button>
                      <button onClick={() => history('/checkout')}>Checkout</button>
                    </Box>
                  </Box>
                }
              </Header>}
    >
      
      <Outlet/>
    </AppShell>
  )
}
