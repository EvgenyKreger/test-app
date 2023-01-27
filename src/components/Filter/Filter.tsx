import React, {FC, useState} from 'react';
import styles from './Filter.module.scss'
import InputFields from "@/components/InputFields/InputFields";
import ProductsCount from "@/components/ProductsCount/ProductsCount";
import ProductsPrice from "@/components/ProductsPrice/ProductsPrice";
import ProductsTitle from "@/components/ProductsTitle/ProductsTitle";
import Brand from "@/components/Brand/Brand";
import ChooseBrand from "@/components/ChooseBrand/ChooseBrand";
import Button from "@/components/Button/Button";
import CleanFormButton from "@/components/CleanFormButton/CleanFormButton";

interface FilterType {
    count: number
    getDataFilter: (checkName: string, maxValue: string, minValue: string) => void
}

const Filter: FC<FilterType> = ({count, getDataFilter}) => {
    let [minValue, setMinValue] = useState('')
    const [maxValue, setMaxValue] = useState('')
    const [checkName, setCheckName] = useState('')
    const checkBrandHandler = (name: string) => {
        if (name === checkName) {
            setCheckName('')
        } else {
            setCheckName(name)
        }
    }
    const checkMinValue = (value: any) => {
        const numbers = /^[0-9]+$/;
        if ((value.match(numbers) || value === '') && value[0] !== '0' && value < 80001) {
            setMinValue(value)
        }
    }
    const checkMaxValue = (value: any) => {
        const numbers = /^[0-9]+$/;
        if ((value.match(numbers) || value === '') && value[0] !== '0' && value < 80001) {
            setMaxValue(value)
        }
    }
    const cleanHandler = () => {
        setMinValue('')
        setMaxValue('')
        setCheckName('')
    }

    return (
        <div className={styles.filter}>
            <div className={styles.forMobile}>
                <ProductsCount count={count}/>
                <ProductsTitle/>
            </div>
            <ProductsPrice/>
            <InputFields
                checkMaxValue={checkMaxValue}
                checkMinValue={checkMinValue}
                maxValue={maxValue}
                minValue={minValue}
                minHolder={'0'}
                maxHolder={'80000'}
            />
            <Brand/>
            <ChooseBrand checkBrandHandler={checkBrandHandler} checkName={checkName}/>
            <div className={styles.chooseBtn}>
                <Button title={'Показать товары'}
                        checkName={checkName}
                        maxValue={maxValue}
                        minValue={minValue}
                        getDataFilter={getDataFilter}/>
                <CleanFormButton title={'Очистить форму'} cleanHandler={cleanHandler}/>
            </div>
        </div>
    );
};

export default Filter;