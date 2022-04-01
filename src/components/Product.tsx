import { BackgroundImage, Box, Button, Image, MediaQuery, SimpleGrid, Title } from '@mantine/core'
import { height } from '@mui/system'
import React, { MouseEventHandler } from 'react'
import { useParams } from 'react-router-dom'
import {getProduct} from '../utils/data'
import { productInterface } from '../utils/productData'
// function(arg: type): returnType how to type out function props

type MyProps = {
  addToCart(name: string) : MouseEventHandler<HTMLButtonElement>
}


export const Product = ({addToCart}: MyProps) => {
  let params = useParams();
  let productInfo: null | productInterface
  
  try {
    productInfo = getProduct(params.productID)
  } catch(error) {
    productInfo = null
  }

  if(productInfo) {  
    return (
      <Box sx={{display: "flex", justifyContent: "center", height: "90vh", alignItems: "center", '@media (max-width: 880px)': {flexDirection: "column", marginTop: 100}}}>
        <Box sx={{
                  backgroundImage: `url(${productInfo.Img})`,
                  backgroundSize: "contain",
                  backgroundColor: "#eef7fa",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: 550, 
                  height: 550, 
                  '@media (max-width: 880px)': {width: 350} 
                }}>
        </Box>
        <SimpleGrid cols={1} spacing="sm" sx={{padding: 100, '@media (max-width: 880px)': {display: "flex", justifyContent: "center", flexDirection: "column", alignItems:"center"}}}>
          <Title order={1}>{`${productInfo.Name}`}</Title>
          <Title order={2}>{` Price: $${productInfo.Price}`}</Title>
          <Button size='xl' onClick={addToCart(`${productInfo?.Name}`)}>Add To Cart</Button>
        </SimpleGrid>
      </Box>
    )
  }
  return (
    <h1>error</h1>
  )
}

