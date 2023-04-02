import React from 'react';

import styles from '../components/layout.module.scss'
import BodyLabel from "./Body.Label";
const Body = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.body}>
            {children}
        </div>
    );
};

Body.Label = BodyLabel

export default Body;