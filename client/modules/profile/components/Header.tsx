import React from 'react';
import Container from "../../../components/containers/Container";
import styles from "../styles.module.scss";

const Header = () => {
    return (
        <Container size={'large'}>
            <div className={styles.head}></div>
        </Container>
    );
};

export default Header;