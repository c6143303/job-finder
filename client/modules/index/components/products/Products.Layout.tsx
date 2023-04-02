"use client"
import React, {useContext, useEffect, useState} from 'react';
import styles from './index.module.scss'
import DefaultButton from "../../../../components/buttons/DefaultButton";
import ProductCardV1 from "../../../../components/cards/ProductCard";
import arrowRight from "../../../../public/images/arrowRight.svg";
import HeartButton from "../../../../components/buttons/HeartButton";
import Link from "next/link";
import {Context} from "../../store/Provider";
import {observer} from "mobx-react";
import EmptyProducts from "./EmptyProducts";

const ProductsLayout = observer(() => {
    const [isFetching, setIsFetching] = useState(false)
    const store = useContext(Context)

    useEffect(() => {
        store.fetchProducts()
    }, [])

    async function loadMoreHandler() {
        store.currentPage = 1
        setIsFetching(true)
        await store.fetchProducts()
        setIsFetching(false)
    }


    return (
        <div className={styles.productContainer}>
            <div className={styles.products}>
                {!store.productDB.length ? <EmptyProducts/> :
                    store.productDB.map(({title, imageSrc, isLiked, id}) => {
                        return (
                            <Link key={id} href={`/product/${id.toString()}`}>
                                <ProductCardV1>
                                    <ProductCardV1.Cover imageSrc={`${process.env.NEXT_PUBLIC_BASE_URL}${imageSrc}`}/>
                                    <ProductCardV1.Content>
                                        <ProductCardV1.Titles title={title} role={'description'}/>
                                    </ProductCardV1.Content>
                                    <ProductCardV1.Details refresh={true} id={1} deadline={new Date()}>
                                        <div className={'flex-between'}>
                                            <DefaultButton iconSide={'right'} icon={arrowRight}
                                                           buttonType={'filledIcon'}
                                                           value={'View'}/>
                                            <HeartButton onClick={e => e.preventDefault()}
                                                         style={{marginLeft: 8 + 'px'}}
                                                         active={isLiked}/>
                                        </div>
                                    </ProductCardV1.Details>
                                </ProductCardV1>
                            </Link>
                        )
                    })
                }
            </div>
            {store.showPagination && <div className={styles.loader}>
                <DefaultButton onClick={loadMoreHandler} loading={isFetching} buttonType={'borderIcon'}
                               value={'Load more data'}/>
            </div>}
        </div>
    );
});

export default ProductsLayout;