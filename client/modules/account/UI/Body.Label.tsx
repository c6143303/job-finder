import React from 'react';
import styles from "../components/layout.module.scss";

interface Interface {
    label: string
    children?: React.ReactNode
}
const BodyLabel:React.FC<Interface> = ({label, children}) => {
    return (
        <div className={styles.bodyLabel}>
            <h2 className={'headline2 neutral8'}>{label}</h2>
            {children}
        </div>
    );
};

export default BodyLabel;