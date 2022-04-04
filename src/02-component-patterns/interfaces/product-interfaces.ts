import { ReactElement } from "react";

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface productContextInterface {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}
