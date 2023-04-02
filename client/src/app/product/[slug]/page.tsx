import React from 'react';

import Layout from "../../../../modules/product/Layout";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

function Page ({params}: {params: Params}) {
    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <Layout queryId={params.slug}/>
        </>
    );
};

export default Page;