import React, { MouseEventHandler } from 'react'
import { Outlet } from 'react-router-dom'

// function(arg: type): returnType how to type out function props



export const Navbar = () => {
  return (
    <div>
      Navbar
      <Outlet/>
      </div>
  )
}
