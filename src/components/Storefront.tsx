import { Box, Button, Card, Code, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductData } from '../utils/productData'

export const Storefront = () => {
  return (
    <SimpleGrid cols={4} spacing="xl">
      {ProductData.map((info) => {
          return <Card shadow="sm" key={`${info.ID}`}>
            <Card.Section>
              <Image src={info.Img} height={450} alt={info.Name} />
            </Card.Section>
            <Box>
              <Text weight={1000}>{`${info.Name}`}</Text>
              <Code color="#E63946">{ "$" + info.Price}</Code>
              <Button fullWidth component={Link} to={`/products/${info.Name}`}>{`${info.Name}`}</Button>
            </Box>
          </Card>
        })
      }
    </SimpleGrid>
  )
}
