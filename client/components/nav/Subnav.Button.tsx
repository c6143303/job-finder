'use client'

import React from 'react';

import styles from './subnav.module.scss'
interface IButton {
    isActive: boolean
    value: string
    onClick: (event: number) => void
    index: number
}
const SubnavButton:React.FC<IButton> = ({isActive = false, value, onClick, index}) => {
    return (
        <button onClick={() => onClick(index)} className={`${styles.button} ${isActive ? styles.activeButton : ''}`}>
            <p>{value}</p>
        </button>
    );
};

export default SubnavButton;