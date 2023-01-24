import React, {FC} from 'react';
import styles from "./Card.module.scss";
import Information from "@/components/Information/Information";
import Photo from "@/components/Photo/Photo";
import NotFound from "@/components/NotFound/NotFound";
import {DataType} from "@/models/models";

interface CardType {
    data: DataType[]
}

const Card: FC<CardType> = ({data}) => {
    const needItem = data.length - 1
    return (
        <div>
            {data.length ?
                <div className={styles.content}>
                    {data && data.map((el, index) =>
                        <div key={el.id} className={styles.card}>
                            <Photo image={el.image?.desktop.x1}/>
                            <Information title={el.title} price={el.price.split('.')[0]} isNew={el.is_new} id={el.id}/>
                            {index !== needItem && <div className={styles.line}></div>}
                        </div>)}
                </div> :
                <NotFound title={'НИЧЕГО НЕ НАЙДЕНО 😔'}/>
            }
        </div>

    );
};

export default Card;