import React from 'react';
import SectionWrapper from "../UI/SectionWrapper";

import styles from '../styles.module.scss'
const AboutSection = () => {
    return (
        <SectionWrapper title={'About'}>
            <div className={styles.about}>
                <p className={'body2'}>Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built</p>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;