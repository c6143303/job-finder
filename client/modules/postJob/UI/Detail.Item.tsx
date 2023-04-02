import React from 'react';
import styles from "../components/Layout.module.scss";

interface IItem {
    title: string
    subTitle: string
}
const DetailItem:React.FC<IItem> = ({title, subTitle}) => {
    return (
        <div className={styles.detailListItem}>
            <p>{title}</p>
            <p className={'neutral8'}>{subTitle}</p>
        </div>
    );
};

export default DetailItem;