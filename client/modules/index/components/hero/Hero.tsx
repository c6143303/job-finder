import React from 'react';

import styles from './Hero.module.scss'
import HeroSearchBar from "./Hero.SearchBar";
import Container from "../../../../components/containers/Container";

function Hero() {

    return (
        <div className={styles.hero}>
            <Container size={'large'}>
                <div className={styles.heroContainer}>
                    <div className={styles.titles}>
                        <h1 className={`headline1 ${styles.mb20}`}><span className={'primary1'}>Tech Jobs</span> for Developers, Designers, and Marketers</h1>
                        <p className={'headline5'}>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                    </div>
                    <HeroSearchBar/>
                </div>
            </Container>
        </div>
    );
};

export default Hero