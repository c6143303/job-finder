import React from 'react';
import styles from "./jobDescription.module.scss";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from "../../../public/images/arrowRight.svg";

interface IJobDescription {
    title: string
    subtitle: string
    href: string
    id: string
}
const JobDescription:React.FC<IJobDescription> = ({title, subtitle, href= '/', id}) => {
    return (
        <div id={id} className={styles.contentItem}>
            <p className={'headline4 neutral8'}>{title}</p>
            <p className={'neutral4 body2 mtb-32'}>{subtitle}</p>
            <div className={`${styles.divider}`}></div>
        </div>
    );
};

export default JobDescription;