import React from 'react';
import styles from "./Layout.module.scss";

const Announce = () => {
    return (
        <div className={styles.postJobAnnounce}>
            <h2 className={'headline2 neutral8'}>Post a Job</h2>
            <p className={'body2'}>To submit a job opening for approval, please fill the following form. If you have any questions in the process, please reach out to support@jobs.com.
                If you are looking to post a featured job, please purchase a featured package here. After that, please add your order ID in the form at the Featured Job section.</p>
            <div className={'divider-hor'}/>
        </div>
    );
};

export default Announce;