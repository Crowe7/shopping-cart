import { Box, Button, createStyles, SimpleGrid, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import React, { MouseEventHandler, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {getProduct} from '../utils/data'
import { productInterface } from '../utils/productData'
import { showNotification } from '@mantine/notifications';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useValueNotification } from '../hooks/valueNotification'
// function(arg: type): returnType how to type out function props

type MyProps = {
  addToCart(name: string) : MouseEventHandler<HTMLButtonElement>
  value: number
}

const useStyles = createStyles((theme) => ({
  productWrapper: {
    display: "flex", 
    justifyContent: "center", 
    height: "90vh", 
    alignItems: "center", 
    '@media (max-width: 880px)': {flexDirection: "column", marginTop: 100}
  },

  img: {
    backgroundSize: "contain",
    backgroundColor: "#eef7fa",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: 550, 
    height: 550, 
    '@media (max-width: 880px)': {width: 350} 
  },

  gridWrapper: {
    padding: 100, 
    '@media (max-width: 880px)': {display: "flex", justifyContent: "center", flexDirection: "column", alignItems:"center"}
  },
  
  productNotFound: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "90vh", 
    flexDirection: "column"
  },

  backHomeButton: {
    marginTop: 20
  }

}))


export const Product = ({addToCart, value}: MyProps) => {
  const { classes } = useStyles() 

  useValueNotification(value);


  let params = useParams();
  let productInfo: null | productInterface
  
  try {
    productInfo = getProduct(params.productID)
  } catch(error) {
    productInfo = null
  }
  
  if(productInfo) {  
    return (
      <Box className={classes.productWrapper}>
        <Box sx={{backgroundImage: `url(${productInfo.Img})`}} className={classes.img}>
        </Box>
        <SimpleGrid cols={1} spacing="sm" className={classes.gridWrapper}>
          <Title order={1}>{`${productInfo.Name}`}</Title>
          <Title order={2}>{` Price: $${productInfo.Price}`}</Title>
          <Button size='xl' onClick={addToCart(`${productInfo?.Name}`)}>Add To Cart</Button>
        </SimpleGrid>
      </Box>
    )
  }
  return (
    <Box className={classes.productNotFound}>
      <h1>Oops! We couldnt find that product!</h1>
      <Button<typeof Link> className={classes.backHomeButton} component={Link} to="/" size='xl'>Back Home</Button>
    </Box>
  )
}

