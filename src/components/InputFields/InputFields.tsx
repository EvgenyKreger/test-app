import React, {FC} from 'react';
import styles from "@/components/InputFields/InputFields.module.scss";

interface InputFieldsType {
    checkMinValue: (value: string) => void
    checkMaxValue: (value: string) => void
    minValue: string
    maxValue: string
    minHolder: string
    maxHolder: string
}

const InputFields: FC<InputFieldsType> = ({
                                              checkMinValue,
                                              checkMaxValue,
                                              minValue,
                                              maxValue,
                                              minHolder,
                                              maxHolder,
                                          }) => {

    return (
        <div className={styles.main}>
            <input className={styles.minValue} onChange={(e) =>
                checkMinValue(e.target.value)}
                   value={minValue}
                   placeholder={minHolder}/>

            <input className={styles.maxValue} onChange={(e) =>
                checkMaxValue(e.target.value)}
                   value={maxValue}
                   placeholder={maxHolder}/>
        </div>
    );
};

export default InputFields;