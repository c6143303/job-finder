import React from 'react';
import styles from "./productCard.module.scss";
import Image, {StaticImageData} from "next/image";

const ProductCardCover = ({imageSrc, children}: {imageSrc: string | StaticImageData, children?: React.ReactNode}) => {
    return (
        <div className={styles.cover}>
            <Image src={imageSrc} alt={'cover'} height={80} width={80}/>
            {children}
        </div>
    );
};

export default ProductCardCover;