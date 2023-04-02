'use client'

import React from 'react';

import styles from './subnav.module.scss'
import SubnavButton from "./Subnav.Button";
interface ISubnav {
    options : {
      value: string
      isActive: boolean
    }[]
    className?: string
    onClick: (e: number) => void
}
const Subnav:React.FC<ISubnav> = ({onClick,options, className= ''}) => {
    return (
        <div className={`${styles.subnav} ${className}`}>
            {options.map((e, index) => {
                return (
                    <SubnavButton index={index} key={index} onClick={onClick} isActive={e.isActive} value={e.value}/>
                )
            })}
        </div>
    );
};

export default Subnav;