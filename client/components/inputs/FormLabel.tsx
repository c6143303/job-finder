import React from 'react';
import styles from './formLabel.module.scss'
import DefaultInput from "./DefaultInput";

interface IFormItem {
    children: React.ReactNode
    title?: string
}
const FormLabel:React.FC<IFormItem> = ({children, title}) => {
    return (
        <div className={styles.formItem}>
            {title && <p className={'hairline2'}>{title}</p>}
            {children}
        </div>
    );
};

export default FormLabel;