"use client"
import React, {ButtonHTMLAttributes, useEffect, useState} from 'react';
import styles from './defaultButton.module.scss'
import Image from "next/image";
import Link from "next/link";
import loadingIcon from '/public/images/loading.svg'

interface IDefaultButton extends ButtonHTMLAttributes<any>{
    buttonType: 'border' | 'filled' | 'filledIcon' | 'borderIcon' | 'transparent' | 'borderNeutral' | 'borderBlue'
    value: string
    href?: string
    icon?: {
        width: number
        height: number
        src: string
    }
    iconSide?: 'left' | 'right'
    onClick?: (event: React.FormEvent) => void
    loading?: boolean,
    size?: 'small' | 'medium'
    style?: {}
}

const buttonStyles = {
    'border': styles.border,
    'filled': styles.filled,
    'filledIcon': styles.filledIcon,
    'borderIcon': styles.borderIcon,
    'transparent': styles.transparent,
    'borderNeutral': styles.borderNeutral,
    'borderBlue': styles.borderBlue
}
const DefaultButton: React.FC<IDefaultButton> = ({
                                                     value,
                                                     buttonType,
                                                     className = null,
                                                     icon,
                                                     onClick = null,
                                                     loading = false,
                                                     iconSide = 'left',
                                                     size = 'small',
                                                     ...rest
                                                 }) => {

    const clickHandler = (event: React.FormEvent) => {
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <button onClick={(e) => clickHandler(e)} {...rest}
                className={`${buttonStyles[buttonType]} ${styles[iconSide]} ${className} ${styles[size]}`}>
            <p>{value}</p>
            {loading ? <Image className={styles.loading} width={loadingIcon.width} height={loadingIcon.height}
                              src={loadingIcon.src}
                              alt={'buttonIcon'}/> : null}
            {icon ? <Image width={icon.width} height={icon.height} src={icon.src} alt={'buttonIcon'}/> : ''}
        </button>
    );
};

export default DefaultButton;