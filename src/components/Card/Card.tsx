import React, {FC} from 'react';
import styles from "./Card.module.scss";
import Information from "@/components/Information/Information";
import Photo from "@/components/Photo/Photo";

interface CardType {
    data: any[]
}

const Card: FC<CardType> = ({data}) => {
    const needItem = data.length - 1
    return (
        <div className={styles.content}>
            {data && data.map((el: any, index) =>
                <div key={el.id} className={styles.card}>
                    <Photo image={el.image?.desktop.x1}/>
                    <Information title={el.title} price={el.price.split('.')[0]} isNew={el.is_new} id={el.id}/>
                    {index !== needItem && <div className={styles.line}></div>}
                </div>)}
        </div>
    );
};

export default Card;