import React from 'react';
import styles from "./index.module.scss";

interface IFormInfo {
    children: React.ReactNode
}
const FormInfo:React.FC<IFormInfo> = ({children}) => {
    return (
        <div className={`${styles.block} ${styles.info}`}>
            {children}
        </div>
    );
};

export default FormInfo;