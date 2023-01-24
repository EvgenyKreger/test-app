import React from 'react';
import styles from './ProductsPrice.module.scss'
import {currency} from "@/constants/currency";

const ProductsPrice = () => {
    return (
        <div className={styles.main}>
            {`Цена, ${currency.ru}`}
        </div>
    );
};

export default ProductsPrice;