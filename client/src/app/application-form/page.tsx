import React from 'react';
import Layout from "../../../modules/applicationForm/components/Layout";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {useRouter} from "next/navigation";

const Page = ({params, searchParams}: {params: Params, searchParams: URLSearchParams}) => {
    console.log(searchParams)
    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <Layout queryId={searchParams.product}/>
        </>
    );
};

export default Page;