import React from 'react';

import styles from '../components/styles.module.scss'
import Image, {StaticImageData} from "next/image";
interface Interface {
    icon: StaticImageData
    value: string
}
const JobInfoItem:React.FC<Interface> = ({icon, value}) => {
    return (
        <div className={styles.jobInfoBreadItem}>
            <Image src={icon.src} alt={'person icon'} height={icon.height} width={icon.width}/>
            <p className={'captionBold neutral4'}>{value}</p>
        </div>
    );
};

export default JobInfoItem;