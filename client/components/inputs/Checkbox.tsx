import React from 'react';

import styles from './Checkbox.module.scss'
const Checkbox = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input type={'checkbox'} {...props} className={`${styles.checkbox} ${props.className ? props.className : ''}`}>

        </input>
    );
};

export default Checkbox;