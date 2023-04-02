import React, {useContext} from 'react';
import {Context} from "../modules/auth/store/Provider";
import {observer} from "mobx-react";
import {useRouter} from "next/navigation";

const ProtectedRoute = observer(({children}: {children: React.ReactNode}) => {
    const store = useContext(Context)
    const router = useRouter()
    if (!store.isAuth) return <p>NOT AUTH</p>
    return (
        <>
            {children}
        </>
    );
});

export default ProtectedRoute;