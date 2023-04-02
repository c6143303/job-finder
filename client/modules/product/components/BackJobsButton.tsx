"use client"
import React from 'react';
import DefaultButton from "../../../components/buttons/DefaultButton";
import styles from "./styles.module.scss";
import arrowLeft from "../../../public/images/arrowLeft.svg";
import {useRouter} from "next/navigation";
import Link from "next/link";

const BackJobsButton = () => {
    const router = useRouter()
    function buttonClickHandler() {
    }
    return (
            <DefaultButton onClick={router.back} iconSide={'left'} className={styles.button} icon={arrowLeft}
                           buttonType={'borderIcon'}
                           value={'Back to jobs'}/>
    );
};

export default BackJobsButton;