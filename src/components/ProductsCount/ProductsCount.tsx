import React, {FC} from 'react';
import styles from './ProductsCount.module.scss'

interface ProductsType {
    count: number
}

const ProductsCount: FC<ProductsType> = ({count}) => {
    return (
        <div className={styles.main}>
            {`Товаров ${count}`}
        </div>
    );
};

export default ProductsCount;