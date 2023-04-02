"use client"
import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";

interface IPortal {
    children: React.ReactNode
}
const Portal:React.FC<IPortal> = ({children}) => {
    const [isMounted, setIsMounted] = useState(false)
    let ref = useRef<Element | null>(null)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#portal')
        setIsMounted(true)
    }, [])

    return ref.current && isMounted ? createPortal(<>{children}</>, ref.current) : null
};

export default Portal;