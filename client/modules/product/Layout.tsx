import React, {useContext, useState} from 'react';
import Body from "./components/Body";
import Header from "./components/Header";
import styles from './components/styles.module.scss'
import Container from "../../components/containers/Container";
import {ProductService} from "../../services/ProductService";


async function Layout({queryId}: {queryId: number}) {
    const product = await ProductService.getById(queryId)
    return (
        <div className={styles.layout}>
            <Container>
                {/* @ts-expect-error Async Server Component */}
                <Header queryId={queryId} product={product}/>
                {/* @ts-expect-error Async Server Component */}
                <Body queryId={queryId} product={product}/>
            </Container>
        </div>
    );
}

export default Layout