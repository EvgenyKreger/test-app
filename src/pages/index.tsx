import Head from 'next/head'
import styles from "@/styles/index.module.scss";
import React, {useEffect, useState} from "react";
import Filter from "@/components/Filter/Filter";
import Card from "@/components/Card/Card";
import Image from "next/image";
import Louder from "@/assets/louder.gif";
import {DataType} from "@/models/models";

const Home = () => {

    const [data, setData] = useState<DataType[]>([])
    const [isLouder, setIsLouder] = useState(false)

    async function getDataFilter(checkName: string, maxValue: string, minValue: string) {
        let brand = '';
        if (checkName === 'Canon') {
            brand = 'brands[]=2&'
        }
        if (checkName === 'Nikon') {
            brand = 'brands[]=9&'
        }
        setIsLouder(true)
        const response = await fetch(
            `https://getlens-master.s.dev.family/api/pages/obektivy?${brand}price[min]=${minValue}&price[max]=${maxValue}`
        );
        const data = await response.json();
        setData(data.products);
        setIsLouder(false)
    }

    useEffect(() => {
        if (!data.length) {
            setIsLouder(true)
            const fetchData = async () => {
                const response = await fetch(`https://getlens-master.s.dev.family/api/pages/obektivy`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': ''
                    }
                });
                const data = await response.json();
                setData(data.products);
                setIsLouder(false)

            }
            fetchData();
        }

    }, [])


    return (
        <>
            <Head>
                <title>Test-app</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport"
                      content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {isLouder ?
                <Image className={styles.louder} src={Louder} alt=""/> :
                <div className={styles.main}>
                    <Filter count={data.length} getDataFilter={getDataFilter}/>
                    <Card data={data}/>
                </div>

            }


        </>
    )
}
export default Home;