import React from 'react';
import styles from './Filter.module.scss'
import InputFields from "@/components/InputFields/InputFields";
import ProductsCount from "@/components/ProductsCount/ProductsCount";
import ProductsPrice from "@/components/ProductsPrice/ProductsPrice";
import ProductsTitle from "@/components/ProductsTitle/ProductsTitle";
import Brand from "@/components/Brand/Brand";
import ChooseBrand from "@/components/ChooseBrand/ChooseBrand";

const Filter = () => {

    return (
        <div className={styles.filter}>
            <ProductsCount count={143}/>
            <ProductsTitle/>
            <ProductsPrice/>
            <InputFields/>
            <Brand/>
            <ChooseBrand/>

        </div>
    );
};

export default Filter;