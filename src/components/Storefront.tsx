import { Box, Button, Card, Code, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ProductData } from '../utils/productData'

export const Storefront = () => {
  return (
    <SimpleGrid 
      cols={4} 
      spacing="xl" 
      sx={{padding: "100px", '@media (max-width: 880px)': {padding: "50px"}}}
      breakpoints={[
        {maxWidth: 1555, cols: 3, spacing: "lg"},
        {maxWidth: 1150, cols: 2, spacing: "md"},
        {maxWidth: 880, cols: 1, spacing: "md"},

      ]}
    >
      {ProductData.map((info) => {
          return <Card sx={{backgroundColor: "#eef7fa",  }} shadow="sm" key={`${info.ID}`}>
            <Card.Section>
              <Image src={info.Img} height={450} alt={info.Name} fit={"contain"} />
            </Card.Section>
            <Box>
              <Text sx={{textAlign: "center", fontSize: "24px"}} weight={700}>{`${info.Name}`}</Text>
              <Code color="pink" sx={{fontSize: 16}}>{ "$" + info.Price}</Code>
              <Button sx={{marginTop: 10}} fullWidth component={Link} to={`/products/${info.Name}`}>View Product</Button>
            </Box>
          </Card>
        })
      }
    </SimpleGrid>
  )
}
