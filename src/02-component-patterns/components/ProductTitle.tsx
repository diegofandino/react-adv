import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface ProductTitleProps {
    title: string;
    className?: string;
}

export const ProductTitle = ({title, className}: ProductTitleProps) => {

    const { product } = useContext(productContext);

    return (
        <span className={`${styles.productDescription} ${className}` }>  {title ? title : product.title} </span>
    )
}