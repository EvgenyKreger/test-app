import React, {useEffect, useState} from 'react';
import styles from "./Card.module.scss";
import notPhoto from '../../assets/no-photo.png'
import Image from "next/image";
import Information from "@/components/Information/Information";

const Card = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://getlens-master.s.dev.family/api/pages/obektivy");
            const data = await response.json();
            const needData = data.products.pop()
            setData(data.products)
        }
        fetchData();
    }, [])
    return (
            <div className={styles.content}>
                {data && data.map((el: any) =>
                    <div key={el.id} className={styles.card}>
                        <div>
                            {el.image?.desktop.x1 ? <img className={styles.image} src={el.image?.desktop.x1} alt=""/> :
                                <Image className={styles.image} src={notPhoto} alt=""/>
                            }
                        </div>
                        <Information title={el.title} price={el.price}/>
                    </div>)}
            </div>
    );
};

export default Card;