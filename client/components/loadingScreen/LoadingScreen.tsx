import React from 'react';
import Container from "../containers/Container";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

import styles from './LoadingScreen.module.scss'
const LoadingScreen = () => {
    return (
        <Container>
            <div className={styles.center}>
                <LoadingSpinner/>
            </div>
        </Container>
    );
};

export default LoadingScreen;