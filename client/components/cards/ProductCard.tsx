"use client"

import React, {useEffect, useState} from 'react';

import styles from './productCard.module.scss'
import ProductCardCover from "./ProductCard.Cover";
import ProductCardDetails from "./ProductCard.Details";
import ProductCardContent from "./ProductCard.Content";
import ProductCardTitles from "./ProductCard.Titles";

const ProductCard = ({children}: {children?: React.ReactNode}) => {
    return (
        <div className={styles.item}>
            {children}
        </div>
    );
};

ProductCard.Cover = ProductCardCover
ProductCard.Details = ProductCardDetails
ProductCard.Content = ProductCardContent
ProductCard.Titles = ProductCardTitles

export default ProductCard;