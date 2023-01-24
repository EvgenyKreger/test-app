import React, {FC} from 'react';
import styles from './Filter.module.scss'
import InputFields from "@/components/InputFields/InputFields";
import ProductsCount from "@/components/ProductsCount/ProductsCount";
import ProductsPrice from "@/components/ProductsPrice/ProductsPrice";
import ProductsTitle from "@/components/ProductsTitle/ProductsTitle";
import Brand from "@/components/Brand/Brand";
import ChooseBrand from "@/components/ChooseBrand/ChooseBrand";

interface FilterType {
    count: number
}

const Filter: FC<FilterType> = ({count}) => {

    return (
        <div className={styles.filter}>
            <div className={styles.forMobile}>
                <ProductsCount count={count}/>
                <ProductsTitle/>
            </div>
            <ProductsPrice/>
            <InputFields/>
            <Brand/>
            <ChooseBrand/>
        </div>
    );
};

export default Filter;