import React, { MouseEventHandler } from 'react'
import { Outlet } from 'react-router-dom'

// function(arg: type): returnType how to type out function props
type M = {
  h(ID: string) : MouseEventHandler<HTMLButtonElement>
}


export const Navbar = ({h}:M) => {
  return (
    <div>
      <button onClick={h("Calico")}></button>
      Navbar
      <Outlet/>
      </div>
  )
}
