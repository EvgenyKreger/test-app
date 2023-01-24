import React, {FC, useState} from 'react';
import styles from "./Information.module.scss";
import {currency} from "@/constants/currency";
import Button from "@/components/Button/Button";
import Image from "next/image";
import heart from "@/assets/favourites.svg";
import heartYes from "@/assets/favouritesYes.svg";

interface InformationType {
    title: string
    price: number
    isNew: boolean
    id: string
}

const Information: FC<InformationType> = ({title, price, isNew, id}) => {
    const [isHeart, setIsHeart] = useState<string[]>([])
    const addIsHeart = (value: string) => {
        setIsHeart((prev) => [...prev, value])
    }
    const deleteIsHeart = (value: string) => {
        const filtered = isHeart.filter(el => el !== value)
        if (filtered) {
            setIsHeart(filtered)
        }

    }
    return (
        <div className={styles.description}>
            <div className={styles.title}>{title}</div>
            <div className={styles.priceNew}>
                <div className={styles.price}>{price} {currency.ru}</div>
                {isNew && <div className={styles.new}>Новое</div>}
            </div>
            <div className={styles.basket}>
                <Button title={'В корзину'}/>
                {isHeart.includes(id) ?
                    <Image onClick={() => deleteIsHeart(id)} src={heartYes} alt=""/> :
                    <Image onClick={() => addIsHeart(id)} src={heart} alt=""/>

                }
            </div>
        </div>
    );
};

export default Information;