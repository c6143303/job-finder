import React from 'react';

import styles from './index.module.scss'

interface IHead {
    title: string
    subtitle: string
}
const ModalHead:React.FC<IHead> = ({title, subtitle}) => {
    return (
        <div className={styles.head}>
            <h3 className={'headline3 neutral8'}>
                {title}
            </h3>
            <p className={'body2 neutral4'}>{subtitle}</p>
        </div>
    );
};

export default ModalHead;