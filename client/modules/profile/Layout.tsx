'use client'
import React, {useEffect} from 'react';
import LayoutWrapper from "../../components/custom/LayoutWrapper";
import styles from './styles.module.scss'
import Header from "./components/Header";
import BodyLayout from "./components/Body.Layout";
import Provider from "./store/Provider";
import {useRouter} from "next/navigation";

const Layout = () => {
    const router = useRouter()

    return (
        <Provider>
            <LayoutWrapper>
                <section className={styles.section}>
                    <Header/>
                    <BodyLayout/>
                </section>
            </LayoutWrapper>
        </Provider>
    );
};

export default Layout;