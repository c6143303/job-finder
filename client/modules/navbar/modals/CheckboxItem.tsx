import React from 'react';
import styles from './index.module.scss'

interface IInterface {
    children: React.ReactNode
}

const CheckboxItem:React.FC<IInterface> = ({children}) => {
    return (
        <div className={styles.infoItem}>
            {children}
        </div>
    )
};

export default CheckboxItem;