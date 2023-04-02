import {useEffect} from "react";

export const UseBlockScroll = (isOpen: boolean) => {
    return useEffect(() => {
        if (isOpen) document.body.classList.add('blockScroll')
        else if (!isOpen) document.body.classList.remove('blockScroll')
    }, [isOpen])
}