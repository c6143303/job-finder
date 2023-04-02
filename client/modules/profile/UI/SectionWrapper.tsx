import React from 'react';
import styles from "../styles.module.scss";
import ProductCardV1 from "../../../components/cards/ProductCard";
import cover from "../../../public/images/cover.jpg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from "../../../public/images/arrowRight.svg";
import HeartButton from "../../../components/buttons/HeartButton";

const SectionWrapper = ({title, children}: {title: string, children: React.ReactNode}) => {
    return (
        <div className={styles.content}>
            <p className={'mb-24 body1 neutral8'}>{title}</p>
            {children}
        </div>
    );
};

export default SectionWrapper;