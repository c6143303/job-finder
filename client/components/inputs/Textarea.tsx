import React from 'react';

import styles from './textarea.module.scss'
const Textarea = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea {...props} className={`${styles.textarea} ${props.className ? props.className : ''}`}>

        </textarea>
    );
};

export default Textarea;