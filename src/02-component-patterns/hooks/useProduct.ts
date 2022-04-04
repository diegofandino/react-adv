import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/product-interfaces";

interface useProductArgs {
    product: Product;
    value?: number;
    onChange?: (args: onChangeArgs) => void;

}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => { 

        const newValue = Math.max(0, counter + value);
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        setCounter(value);
    }, [value])
    

    return {
        counter,
        increaseBy
    }

}

