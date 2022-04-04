import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/product-interfaces';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug 2',
    img: './coffee-mug2.png'
}

const products: Product[] = [product, product2]

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

  
  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
    
    if( count <= 0 ){
      const shoppingCartCopy = {...shoppingCart};
      delete shoppingCartCopy[product.id];
      setShoppingCart({...shoppingCartCopy});
      return;
    }
    
    setShoppingCart( (oldShopping: any) => {
      return {
        ...oldShopping,
        [product.id]: {...product, count}
      }
    })
    
  }

  return (
    <div>
        <h1> Shopping page </h1>
        <hr />

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

      {products.map(product => (
        <ProductCard key={product.id} product={product} onChange={onProductCountChange} value={ shoppingCart[product.id]?.count || 0 }>
          <ProductImage className='custom-image' />
          <ProductTitle title='Coffee MUG2' />
          <ProductButtons />
        </ProductCard>
      ))}


          <div className='shopping-cart'>
            {
              Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard value={product.count} onChange={onProductCountChange} key={key} product={product} style={{width: '100px'}}>
                <ProductImage  className='custom-image' />
                <ProductButtons />
              </ProductCard>
              )) 
            }
          </div>

        </div>

    </div>
  )
}
