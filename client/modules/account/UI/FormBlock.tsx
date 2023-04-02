import React from 'react';
import styles from "../components/layout.module.scss";
import FormBlockLabel from "./FormBlock.Label";
import FormBlockBody from "./FormBlock.Body";

const FormBlock = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.bodyBlock}>
            {children}
        </div>
    );
};

FormBlock.Label = FormBlockLabel
FormBlock.Body = FormBlockBody
export default FormBlock;