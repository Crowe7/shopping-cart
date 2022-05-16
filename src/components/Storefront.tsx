import { Box, Button, Card, Code, createStyles, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductData } from '../utils/productData'


const useStyles = createStyles((theme) => ({
  gridWrapper: {
    padding: "100px", 
    '@media (max-width: 880px)': {padding: "50px"}
  },

  productCard: {
    backgroundColor: "#eef7fa"
  },

  productName: {
    textAlign: "center", 
    fontSize: "24px"
  },

  productPrice: {
    fontSize: 16
  },

  viewProductButton: {
    marginTop: 10
  }

}))


export const Storefront = () => {
  const { classes } = useStyles()
  return (
    <SimpleGrid 
      cols={4} 
      spacing="xl" 
      className={classes.gridWrapper}
      breakpoints={[
        {maxWidth: 1555, cols: 3, spacing: "lg"},
        {maxWidth: 1150, cols: 2, spacing: "md"},
        {maxWidth: 880, cols: 1, spacing: "md"},

      ]}
    >
      {ProductData.map((info) => {
          return <Card className={classes.productCard} shadow="sm" key={`${info.ID}`}>
            <Card.Section>
              <Image src={info.Img} height={450} alt={info.Name} fit={"contain"} />
            </Card.Section>
            <Box>
              <Text className={classes.productName} weight={700}>{`${info.Name}`}</Text>
              <Code color="pink" className={classes.productPrice}>{ "$" + info.Price}</Code>
              <Button className={classes.viewProductButton} fullWidth component={Link} to={`/products/${info.Name}`}>View Product</Button>
            </Box>
          </Card>
        })
      }
    </SimpleGrid>
  )
}
