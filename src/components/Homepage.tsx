import React from 'react'
import background from '../media/background.svg'
import a from '../media/Azul.png'
import { Box } from '@mantine/core'
export default function Homepage() {
  return (
    <>
      <h1>HOMEPAGE</h1>
      <Box sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              aspectRatio: "960/500",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${background})`,
              '@media (max-width: 450px)': {aspectRatio: "960/2500",}
            }}></Box>
    </>
  )
}
