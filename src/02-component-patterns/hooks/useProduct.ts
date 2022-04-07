import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/product-interfaces";

interface useProductArgs {
    product: Product;
    value?: number;
    onChange?: (args: onChangeArgs) => void;
    initialValues?: InitialValues;

}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false)

    const increaseBy = (value: number) => {
        let newValue = Math.max(0, counter + value);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues?.maxCount);
        }

        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    }, [value])
    

    return {
        counter,
        increaseBy
    }

}

