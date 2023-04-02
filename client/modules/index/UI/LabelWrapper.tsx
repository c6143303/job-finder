import React from 'react';

import styles from './index.module.scss'
const LabelWrapper = ({onInput, children}: any) => {
    return (
        <label onInput={onInput} className={styles.checkboxWrapper}>
            {children}
        </label>
    );
};

export default LabelWrapper;