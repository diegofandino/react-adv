import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';

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

        <ProductCard product={product} className="bg-dark">
          <ProductImage style={{backgroundColor: '#52afde'}} className='custom-image' />
          <ProductTitle title='Coffee MUG' className='text-white'/>
          <ProductButtons />
        </ProductCard>

        </div>
    </div>
  )
}
