import React, {useEffect, useState} from 'react';
import styles from "./Card.module.scss";
import Button from "@/components/Button/Button";
import {currency} from "@/constants/currency";



const Card = () => {
    const [data, setData] = useState<any>([])
    console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://getlens-master.s.dev.family/api/pages/obektivy");
            const data = await response.json();
            setData(data.products)
        }
        fetchData();
    }, [])
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                {data && data.map((el:any) => <div key={el.id} className={styles.card}>
                    <img className={styles.image} src={el.image?.desktop.x1} alt=""/>
                    <div className={styles.description}>
                        <div className={styles.title}>{el.title}</div>
                        <div className={styles.priceNew}>
                            <div className={styles.price}>{el.price} {currency.ru}</div>
                            <div> Новое</div>
                        </div>
                        <Button title={'В корзину'}/>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default Card;