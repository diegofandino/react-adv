import React, { createContext, ReactElement, useContext, useState } from 'react'
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { productContextInterface, ProductCardProps } from '../interfaces/product-interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';


export const productContext = createContext({} as productContextInterface);
const {Provider} = productContext;   




export const ProductCard = ({children, product, className}: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        
    <div className={`${styles.productCard} ${className}`}>
        {children}
        {/* 
        <ProductImage />
        <ProductTitle title='Coffee Mug' />

        <ProductButtons increaseBy={ increaseBy } counter={counter} /> */}

        

    </div>

    </Provider>

  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;