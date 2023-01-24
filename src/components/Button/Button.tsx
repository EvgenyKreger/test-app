import React, {FC} from 'react';
import styles from './Button.module.scss'
interface ButtonType{
    title: string
}
const Button:FC<ButtonType> = ({title}) => {
    return (
        <div className={styles.btn}>{title}</div>
    );
};

export default Button;