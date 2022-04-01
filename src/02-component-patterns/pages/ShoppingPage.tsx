import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1> Shopping page </h1>
        <hr />

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title='Coffee MUG' />
          <ProductButtons />
        </ProductCard>

        </div>
    </div>
  )
}
