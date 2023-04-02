import React from 'react';
import styles from './layout.module.scss'
import Provider from "../store/Provider";
import Container from "../../../components/containers/Container";
import {IProduct} from "../../../interfaces";
import FormHead from "./FormHead";
import FormBody from "./FormBody";
import {ProductService} from "../../../services/ProductService";
import {$PRODUCT_ID_PARAM} from "../../../util/const";
import {useRouter} from "next/navigation";
import ErrorPage from "../../../components/ErrorPage";

export default async function Layout ({queryId}: {queryId: number}) {
    const product: IProduct | boolean = await ProductService.getById(queryId)

    if (!product) return <ErrorPage statusCode={'400'}/>

    return (
        <section className={styles.form}>
            <Container size={'small'}>
                <FormHead title={product?.title ? product.title : 'undefined'}/>
                <FormBody companyId={product?.companyId ? product.companyId : 1}/>
            </Container>
        </section>
    );
}
