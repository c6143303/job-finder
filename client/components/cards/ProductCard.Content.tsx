import React from 'react';
import styles from "./productCard.module.scss";

const ProductCardContent = ({children}: {children?: React.ReactNode}) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default ProductCardContent;