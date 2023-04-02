"use client"
import React, {RefObject, useEffect, useRef} from 'react';

interface IModal {
    children: React.ReactNode
    isOpen: boolean
    closeHandler: () => void
    className?: string | object
}

import styles from './Modal.Default.module.scss'
import {UseBlockScroll} from "../../hooks/UseBlockScroll";
import Portal from "../custom/Portal";
import {UseClickOutside} from "../../util/UseClickOutside";
import {observer} from "mobx-react";

type Handler = (event: MouseEvent) => void
const ModalDefault: React.FC<IModal> = observer(({children, isOpen = false, closeHandler, className = ''}) => {
    const ref = useRef(null)
    UseClickOutside(ref, closeHandler)
    UseBlockScroll(isOpen)

    return (
        <Portal>
            <div className={`${styles.modal} ${isOpen ? styles.open : ''} ${className}`}>
                <div className={styles.modalGuts}>
                    <div ref={ref} className={styles.container}>
                        <div onClick={closeHandler} className={styles.closeModal}>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
})

export default ModalDefault;