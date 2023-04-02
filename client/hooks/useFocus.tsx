import {RefObject, useEffect} from "react";

export const useFocus = (active: boolean, inputRef: RefObject<any>) => {
    useEffect(() => {
        if ( active && inputRef.current ) {
            setTimeout(() => {
                inputRef.current.focus();
                console.log('ex')
            }, 100)
        }
    }, [active]);
};