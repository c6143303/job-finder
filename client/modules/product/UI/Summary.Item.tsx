import React from 'react';

import styles from './summary.module.scss'
import Image, {StaticImageData} from "next/image";
import arrowRight from "../../../public/images/arrowRight.svg";
interface ISummaryItem {
    icon: StaticImageData
    title: string
    subtitle: string
}
const SummaryItem:React.FC<ISummaryItem> = ({icon, title, subtitle}) => {
    return (
        <li className={styles.summaryItem}>
            <div className={styles.summaryHeadline}>
                <Image src={icon.src} alt={`${title} icon`} width={icon.width} height={icon.height}/>
                <p className={'neutral4'}>{title}</p>
            </div>
            <p className={'captionBold neutral8'}>{subtitle}</p>
        </li>
    )
};

export default SummaryItem;