import React, {RefObject, useEffect} from "react";

type Handler = (event: React.MouseEvent) => void
export const UseClickOutside = (ref: RefObject<HTMLElement>, handler: Handler ) => {
    useEffect(
        () => {
            const listener: any = (event: React.MouseEvent) => {
                if (event.clientX + 7 >= (event.target as any).clientWidth) {
                    return
                }
                const target = event.target as HTMLElement
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
            };
        },
        [ref, handler]
    );
}

