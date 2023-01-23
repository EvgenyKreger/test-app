import React, {FC} from 'react';
import styles from "./Information.module.scss";
import {currency} from "@/constants/currency";
import Button from "@/components/Button/Button";
import Image from "next/image";
import heart from "@/assets/favourites.svg";

interface InformationType {
    title: string
    price: number
}

const Information:FC<InformationType> = ({title,price}) => {
    return (
        <div className={styles.description}>
            <div className={styles.title}>{title}</div>
            <div className={styles.priceNew}>
                <div className={styles.price}>{price} {currency.ru}</div>
                <div className={styles.new}>Новое</div>
            </div>
            <div className={styles.basket}>
                <Button title={'В корзину'}/>
                <Image src={heart} alt=""/>
            </div>
        </div>
    );
};

export default Information;