import React from 'react';
import styles from "./productCard.module.scss";
import Image from "next/image";
import checkIcon from "../../public/images/check-grey.svg";
import DefaultButton from "../buttons/DefaultButton";
import arrowRight from "../../public/images/arrowRight.svg";

const ProductCardDetails = ({
                                deadline,
                                id,
                                children,
                                refresh = false
                            }: { deadline: Date, id: number, children?: React.ReactNode, refresh?: boolean }) => {
    return (
        <div className={styles.details}>
            {!refresh &&
                <>
                    <div className={styles.deadline}>
                        <div className={styles.deadlineIcon}>
                            <Image src={checkIcon} alt={'check icon'} width={checkIcon.width}
                                   height={checkIcon.height}/>
                        </div>
                        <p className={'caption2 neutral4'}>{new Date(deadline).toLocaleDateString('en-US', {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}</p>
                    </div>
                    <DefaultButton href={`product/${id}`} onClick={() => console.log('click')} buttonType={'filledIcon'}
                                   value={'View deal'} icon={arrowRight}/>
                </>}
            {children}
        </div>
    );
};

export default ProductCardDetails;