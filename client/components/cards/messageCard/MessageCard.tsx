import React from 'react';

import styles from './styles.module.scss'
import Divider from "../../custom/Divider";
import DefaultButton from "../../buttons/DefaultButton";
import {MessageCardProps} from "./MessageCard.props";
import {dateParser} from "../../../util/dateParser";
import Link from "next/link";

const MessageCard = ({email, cv, message, date, lastname, userName, downloadCvHandler, updateCheckedStatus, checked}: MessageCardProps) => {
    const cvFilePath = process.env.NEXT_PUBLIC_BASE_URL + cv.split('uploads\\')[1]
    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.content}>
                    <p className={'body1 neutral8'}>{`${userName} ${lastname}`}</p>
                    <p className={'captionBold'}>{email}</p>
                </div>
                <div className={styles.info}>
                    <p className={'mb-10 caption2'}>{dateParser(new Date(date))}</p>
                    <DefaultButton onClick={downloadCvHandler} buttonType={'filled'} value={'Download Cv'}/>
                </div>
            </div>
            <Divider/>
            <div className={styles.bottom}>
                <p className={'neutral8'}>{message}</p>
            </div>
            <DefaultButton onClick={updateCheckedStatus} size={'medium'} buttonType={!checked ? 'border' : 'filled'} value={checked ? 'remove checked' : 'set checked'}/>
        </div>
    );
};

export default MessageCard;