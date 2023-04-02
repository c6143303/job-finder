import React from 'react';
import styles from "./Layout.module.scss";
import Image from "next/image";
import cover from '/public/images/cover.jpg';
import dateIcon from '/public/images/date.svg';
import {
    $POST_CATEGORY,
    $POST_DESCRIPTION,
    $POST_LOCATION, $POST_POSITION,
    $POST_SALARY,
    $POST_TITLE,
    $POST_TYPE
} from "../../../util/const";
import {dateParser} from "../../../util/dateParser";
import DetailItem from "../UI/Detail.Item";
import {reduceText} from "../../../util/reduceText";
import {IDropdownOption, IUseForm} from "../../../interfaces";
import {observer} from "mobx-react";

interface IPreview {
    activeType: IDropdownOption | undefined
    activeCategory: IDropdownOption | undefined
    UseForm: IUseForm
}

const Preview = observer(({UseForm, activeType, activeCategory}: IPreview) => {
    const values = UseForm.values['fields']
    const title = values.title.value || $POST_TITLE
    const position = values.position.value || $POST_POSITION
    const expires = dateParser(values.expires.value) || $POST_POSITION
    const salaryFrom = values.salaryFrom.value
    const salaryTill = values.salaryTill.value
    const salary = salaryTill && salaryFrom ? `${salaryFrom} - ${salaryTill} $` : $POST_SALARY
    const description = values.description.value || $POST_DESCRIPTION

    const typeActiveItem = activeType?.value || $POST_TYPE
    const categoryActiveItem = activeCategory?.value || $POST_CATEGORY

    return (
        <div className={styles.postJobPreview}>
            <div className={styles.thumbnail}>
                <Image src={cover.src} alt={'company cover'} width={72} height={72} className={styles.thumbnailAvatar}/>
                <div className={styles.thumbnailInfo}>
                    <p className={'neutral8 body2'}>
                        {title}
                    </p>
                    <p>
                        {position}
                    </p>
                </div>
            </div>
            <div className={styles.dates}>
                <Image src={dateIcon.src} alt={'date icon'} width={20} height={20}/>
                <div className={styles.datesInfo}>
                    <p className={'caption2 neutral4'}>Deadline ends</p>
                    <p className={'body2 neutral8'}>
                        {expires}
                    </p>
                </div>
            </div>
            <p className={'body1body neutral8'}>Job details</p>
            <div className={styles.detailList}>
                <DetailItem title={'Salary'}
                            subTitle={salary}/>
                <DetailItem title={'Job type'} subTitle={typeActiveItem}/>
                <DetailItem title={'Job Category'} subTitle={categoryActiveItem}/>
            </div>
            <p className={'body1body neutral8'}>Description</p>
            <div className={styles.detailList}>
                <p className={'body2'}>{reduceText(description, 75)}</p>
            </div>
        </div>
    );
});

export default Preview;