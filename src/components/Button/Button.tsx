import React, {FC} from 'react';
import styles from './Button.module.scss'

interface ButtonType {
    title: string
    checkName?: string
    maxValue?: string
    minValue?: string
    getDataFilter?: (checkName: string , maxValue: string , minValue: string ) => void
}

const Button: FC<ButtonType> = ({title,checkName,maxValue,minValue, getDataFilter}) => {
    return (
        <div className={styles.btn} onClick={() => getDataFilter ? getDataFilter(checkName!,maxValue!,minValue!) : null}>{title}</div>
    );
};

export default Button;