"use client"
import arrowRight from "../../../public/images/arrowRight.svg";
import React from 'react';
import DefaultButton from "../../../components/buttons/DefaultButton";
import {useRouter} from "next/navigation";
import {$PRODUCT_ID_PARAM} from "../../../util/const";
const ApplyJobButton = ({queryId}: {queryId: number}) => {
    const router = useRouter()

    function applyButtonHandler() {
        router.push(`/application-form?${$PRODUCT_ID_PARAM}=${queryId}`)
    }
    return (
        <DefaultButton onClick={applyButtonHandler} size={'medium'} iconSide={'right'}
                       icon={arrowRight} buttonType={'filledIcon'} value={'Apply'}/>
    );
};

export default ApplyJobButton;