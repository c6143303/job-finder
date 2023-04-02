import React from 'react';
import styles from "../components/layout.module.scss";

interface ILabel {
    label: string
}
const FormBlockLabel:React.FC<ILabel> = ({label}) => {
    return (
        <div className={styles.blockLabel}>
            <p className={'body2 neutral8'}>{label}</p>
        </div>
    );
};

export default FormBlockLabel;