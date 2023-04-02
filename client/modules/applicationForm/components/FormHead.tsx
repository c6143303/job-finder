import React from 'react';
import styles from "./layout.module.scss";

const FormHead = ({title}: {title: string}) => {
    return (
        <div className={styles.formHead}>
            <p className={'headline2 neutral8 mb-16'}>Application Form</p>
            <p className={'neutral8 body2 mb-32'}>{title && title}</p>
            <div className={'divider-hor mb-48'}></div>
        </div>
    );
};

export default FormHead;