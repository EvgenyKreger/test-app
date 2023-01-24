import React, {FC, useState} from 'react';
import styles from './ChooseBrand.module.scss';
import Image from "next/image";
import check from "@/assets/check.svg";
import {brandOfCameras} from "@/constants/brandOfCameras";

interface ChooseBrandType {
    checkBrandHandler: (name: string) => void
    checkName: string

}

const ChooseBrand:FC<ChooseBrandType> = ({checkBrandHandler,checkName}) => {

    return (
        <>
            {brandOfCameras.map((el, index) =>
                <div key={+index} className={styles.checkBox}>
                    {checkName !== el
                        ?
                        <div className={styles.checkBoxOff} onClick={() => checkBrandHandler(el)}></div>
                        :
                        <div className={styles.checkBox}>
                            <div className={styles.checkBoxOn}>
                                <Image onClick={() => checkBrandHandler(el)} src={check} alt={''}/>
                            </div>
                        </div>
                    }
                    <span className={styles.text}>{el}</span>
                </div>
            )
            }
        </>
    );
};

export default ChooseBrand;