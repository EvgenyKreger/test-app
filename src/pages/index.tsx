import Head from 'next/head'
import styles from "@/styles/index.module.scss";
import React, {useEffect} from "react";
import Filter from "@/components/Filter/Filter";
import Card from "@/components/Card/Card";
import photo from '../assets/no-photo.png'

const Home = () => {

    useEffect(() => {
        const screenWidth = window.screen.width
        const screenHeight = window.screen.height
        console.log(screenWidth, screenHeight)
    });


    return (
        <>
            <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
                    rel="stylesheet"
                />
        </Head>
            <div className={styles.main}>
                <Filter/>
                <Card/>
            </div>
        </>
)
}
export default Home;