import React from 'react'
import background from '../media/background.svg'
import homepageImage from '../media/homepageImage.jpg'
import homepageBlob from '../media/homepageBlob.png'
import { Box, Image, Title, Button, createStyles} from '@mantine/core'
import {Link} from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  homepageWrapper: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "80vh"
  },

  contentWrapper: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    '@media (max-width: 1400px)': {flexDirection: "column-reverse"}
  },

  sloganWrapper: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    height: 150
  },

  slogan: {
    fontSize: 40, 
    padding: 20, 
    '@media (max-width: 1400px)': {color: "#F1FAEE", marginLeft: "15px", textAlign: "center"}
  },

  productsButton: {
    width: "50%", 
    padding: 20
  },

  imageBlob: {
    position: "relative", 
    zIndex: -1, 
    bottom: 350, 
    '@media (max-width: 1400px)': {display: "none"}
  },

  homepageImage: {
    width: 630, 
    height: 330, 
    '@media (max-width: 750px)': {height:"200px", width: "300px"}, 
    '@media (min-width: 750px) and (max-width: 1600px)': {width: "500px"}
  },

  backgroundSvg: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    aspectRatio: "960/500",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    zIndex: -2,
    '@media (max-width: 1400px)': {aspectRatio: "960/2500",}
  }

}))


export default function Homepage() {
  const { classes } = useStyles()
  return (
    <Box className={classes.homepageWrapper}>
      <Box className={classes.contentWrapper}>

        <Box className={classes.sloganWrapper}>

          <Title className={classes.slogan} order={1}>Unlo<span style={{color: "#F1FAEE"}}>cking Fun for the Whole Fam</span>ily! </Title>
          <Button className={classes.productsButton} size='xl' component={Link} to='/products'>View Products</Button>
          <Image
            src={homepageBlob}
            width={900}
            className={classes.imageBlob}
          />
        </Box>
        <Image
          className={classes.homepageImage}
          radius="lg"
          src={homepageImage}
          alt="Group Of Creative Friends Sitting At Wooden Table. People Having Fun While Playing Board Game"
        />
      </Box>
      <Box className={classes.backgroundSvg}></Box>
    </Box>
  )
}
