import { ReactElement } from "react";

export interface ProductCardProps {
    children: () => JSX.Element;
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
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

export interface onChangeArgs {
     product: Product;
     count: number;
}