import React from 'react';
import styles from "../components/styles.module.scss";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from "../../../public/images/arrowRight.svg";
import ApplyJobButton from "../components/ApplyJobButton";

interface IAnnounce {
    title: string
    subtitle: string
    queryId: number
}
const JobAnnounce:React.FC<IAnnounce> = ({title, subtitle, queryId}) => {
    return (
        <div className={styles.announce}>
            <h4 className={'headline4 neutral8'}>
                {title}
            </h4>
            <p className={`${styles.announceText} body2`}>{subtitle}</p>
            <ApplyJobButton queryId={queryId}/>
        </div>
    );
};

export default JobAnnounce;