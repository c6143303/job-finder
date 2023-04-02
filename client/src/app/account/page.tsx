'use client'
import React, {useContext} from 'react';
import Layout from "../../../modules/account/Layout";
import {Context} from "../../../modules/auth/store/Provider";
import ProtectedRoute from "../../../components/ProtectedRoute";

const Page = () => {
    const store = useContext(Context)
    return (
        <ProtectedRoute>
            <Layout/>
        </ProtectedRoute>
    );
};

export default Page;