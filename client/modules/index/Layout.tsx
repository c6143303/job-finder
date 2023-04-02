'use client'
import React, {useEffect, useState} from 'react';
import NavLayout from "./components/products/NavLayout";
import FilterLayout from "./components/products/FilterLayout";
import styles from './components/Layout.module.scss'
import ProductsLayout from "./components/products/Products.Layout";
import Provider from "./store/Provider";
import Container from "../../components/containers/Container";
import Hero from "./components/hero/Hero";

const Layout = () => {
    return (
        <Provider>
            <Hero/>
            <Container>
                <div id={'jobs'} className={styles.products}>
                    <div className={styles.body}>
                        <FilterLayout/>
                        <ProductsLayout/>
                    </div>
                </div>
            </Container>
        </Provider>
    );
};

export default Layout;