import Head from 'next/head'
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import check from '@/assets/check.svg'
import React, {useEffect, useState} from "react";


const Home = () => {

    useEffect(() => {
        const screenWidth = window.screen.width
        const screenHeight = window.screen.height
        console.log(screenWidth, screenHeight)
    });

    const array = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'];
    const [isCheck, setIsCheck] = useState(false);
    return (
        <>
            <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
            <div className={styles.main}>
                <div className={styles.filter}>
                    <div>Tоваров 143</div>
                    <div>Камеры</div>
                    <div>Цена, ₽</div>
                    <input className={styles.minValue} type="number" min="-50"/>
                    <input className={styles.maxValue} type="number" min="-50"/>
                    <div>Бренд</div>
                    {!isCheck ?
                        <div className={styles.checkBox}>
                            <div className={styles.checkBoxOff} onClick={() => setIsCheck(true)}> </div>
                            <span>Canon</span>
                        </div>

                        :
                        <div className={styles.checkBox}>
                            <div className={styles.checkBoxOn} onClick={() => setIsCheck(false)}>
                                <Image src={check} alt={''}/>
                            </div>
                            <span>Canon</span>
                        </div>}
                    {!isCheck ?
                        <div className={styles.checkBox}>
                            <div className={styles.checkBoxOff} onClick={() => setIsCheck(true)}> </div>
                            <span>Nicon</span>
                        </div>

                        :
                        <div className={styles.checkBox}>
                            <div className={styles.checkBoxOn} onClick={() => setIsCheck(false)}>
                                <Image src={check} alt={''}/>
                            </div>
                            <span>Nicon</span>
                        </div>}

                </div>
                <div className={styles.content}>
                    {array.map(el => <div className={styles.card}>
                        <img className={styles.image} src="" alt=""/>
                        {el}
                        <div>Название</div>
                        <div style={{display: "flex"}}>
                            <div>28 000 ₽</div>
                            <div> Новое</div>
                        </div>
                        <Button title={'В корзину'}/>
                    </div>)}
                </div>
            </div>
        </>
)
}
export default Home;