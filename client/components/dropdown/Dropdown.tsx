"use client"
import React, {HTMLAttributes, useEffect, useRef, useState} from 'react';
import {UseClickOutside} from "../../hooks/UseClickOutside";

interface IOptions {
    value: string
    id: number
}

interface Props {
    headValue: string
    options: IOptions[]
    onClick: (event: React.SyntheticEvent) => void
    defaultValue?: null | number,
    name?: string
    className?: string
}

import styles from './Dropdown.module.scss'

const Dropdown: React.FC<Props> = ({headValue, options, onClick, defaultValue, className, name}) => {
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef(null)

    const headClickHandler = () => {
        setIsOpen(!isOpen)
    }
    UseClickOutside(inputRef, () => setIsOpen(false))
    return (
        <div ref={inputRef} className={`${styles.dropdown} ${className}`}>
            <div onClick={headClickHandler} className={styles.dropdownHead}>
                <p>{defaultValue == undefined ? headValue : options[defaultValue]['value']}</p>
                <div className={styles.dropdownIcon}></div>
            </div>
            <div style={{display: isOpen ? 'block' : 'none'}} className={`${styles.dropdownBody}`}>
                {options.map((e, index) => {
                    return (
                        <div data-index={index} data-name={name} key={index} onClick={onClick}
                             className={`${styles.dropdownItem} ${index == defaultValue ? styles.active : ''}`}>
                            <p className={'captionBold'}>{e.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default Dropdown;