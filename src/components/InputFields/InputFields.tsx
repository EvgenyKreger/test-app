import React, {useState} from 'react';
import styles from "@/components/InputFields/InputFields.module.scss";

const InputFields = () => {
    const[minValue, setMinValue] = useState('0')
    const[maxValue, setMaxValue] = useState('499000')

    // function insertBlankAfterEveryThreeCharacters(str: any) {
    //     str = str.split(" ").join("").split("");
    //     const formatted=[];
    //     while(str.length) {
    //         for(var i=0; i<1 && str.length; i++) {
    //             formatted.push(str.shift());
    //         }
    //         if(str.length === 3) formatted.push(" ");
    //
    //     }
    //     return formatted.join("") ;
    // };



    return (
        <div className={styles.main}>
            <input className={styles.minValue} onChange={(e)=>
                setMinValue(e.target.value)} type="number" value={minValue} min="0" max="499000"/>

            <input className={styles.maxValue} onChange={(e)=>
                setMaxValue(e.target.value)} type='number' value={maxValue}  min='0' max='499000'/>
        </div>
    );
};

export default InputFields;