import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/product-interfaces';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

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

            <ProductCard 
            key={product.id}
            product={product}
            onChange={onProductCountChange}
            value={ shoppingCart[product.id]?.count || 0 }
            initialValues={{
              count: 4,
              maxCount: 10
            }}
            >
              {
                () => (
                  <>
                    <ProductImage className='custom-image' />
                    <ProductTitle title='Coffee MUG2' />
                    <ProductButtons />
                  </>
                )
              }
            </ProductCard>
        </div>

    </div>
  )
}
