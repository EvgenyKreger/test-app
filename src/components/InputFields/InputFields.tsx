import React, {useState} from 'react';
import styles from "@/components/InputFields/InputFields.module.scss";


const InputFields = () => {

    let [minValue, setMinValue] = useState('')
    const [maxValue, setMaxValue] = useState('')

    const checkValue = (value: any) => {
        const numbers = /^[0-9]+$/;
        if (value.match(numbers)) {
            setMinValue(value)
        }
    }
    const checkMaxValue = (value: any) => {
        const numbers = /^[0-9]+$/;
        if (value.match(numbers)) {
            setMaxValue(value)
        }
    }
    return (
        <div className={styles.main}>
            <input className={styles.minValue} onChange={(e) =>
                checkValue(e.target.value)} value={minValue} placeholder={'0'}/>

            <input className={styles.maxValue} onChange={(e) =>
                checkMaxValue(e.target.value)} value={maxValue} placeholder={'499000'}/>
        </div>
    );
};

export default InputFields;