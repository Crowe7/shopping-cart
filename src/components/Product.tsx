import { Box, Button, Image, SimpleGrid, Title } from '@mantine/core'
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
      <Box sx={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", '@media (max-width: 880px)': {flexDirection: "column"}}}>
        <Image sx={{backgroundColor: "#eef7fa"}} src={productInfo.Img} height={550} width={550} fit={"contain"} />
        <SimpleGrid cols={1} spacing="sm" sx={{padding: 100}}>
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

