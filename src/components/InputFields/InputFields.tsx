import React, {FC} from 'react';
import styles from "@/components/InputFields/InputFields.module.scss";

interface InputFieldsType {
    checkMinValue: (value: string) => void
    checkMaxValue: (value: string) => void
    minValue: string
    maxValue: string
    minHolder: string
    maxHolder: string
    setMaxValue: (value: string) => void
    setMinValue: (value: string) => void

}

const InputFields: FC<InputFieldsType> = ({
                                              checkMinValue,
                                              checkMaxValue,
                                              minValue,
                                              maxValue,
                                              minHolder,
                                              maxHolder,
                                              setMaxValue,
                                              setMinValue
                                          }) => {
    const handler = (key: string) => {
        if (key === 'Backspace' && minValue.length === 1) {
            setMinValue('')
        }
        if (key === 'Backspace' && maxValue.length === 1) {
            setMaxValue('')
        }
    }
    return (
        <div className={styles.main}>
            <input className={styles.minValue} onChange={(e) =>
                checkMinValue(e.target.value)} onKeyUp={(e) => handler(e.key)} value={minValue}
                   placeholder={minHolder}/>

            <input className={styles.maxValue} onChange={(e) =>
                checkMaxValue(e.target.value)} onKeyUp={(e) => handler(e.key)} value={maxValue}
                   placeholder={maxHolder}/>
        </div>
    );
};

export default InputFields;