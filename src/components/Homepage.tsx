import React from 'react'
import background from '../media/background.svg'
import homepageImage from '../media/homepageImage.jpg'
import homepageBlob from '../media/homepageBlob.png'
import { Box, Image, Title, Button, } from '@mantine/core'
import {Link} from 'react-router-dom'
export default function Homepage() {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "1000px" }}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", height: 150}}>
          <Title sx={{fontSize: 40, padding: 20}} order={1}>Unlo<span style={{color: "#F1FAEE"}}>cking Fun for the Whole Fam</span>ily! </Title>
          <Button sx={{width: "50%", padding: 20}} size='xl' component={Link} to='/products'>View Products</Button>
          <Image
            src={homepageBlob}
            width={900}
            sx={{position: "relative", zIndex: -1, bottom: 350}}
          />
        </Box>
        <Image
          radius="lg"
          src={homepageImage}
          width={600}
          height={330}
          alt="Group Of Creative Friends Sitting At Wooden Table. People Having Fun While Playing Board Game"
      />
      </Box>
      <Box sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              aspectRatio: "960/500",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${background})`,
              zIndex: -2,
              '@media (max-width: 450px)': {aspectRatio: "960/2500",}
            }}></Box>
    </Box>
  )
}
