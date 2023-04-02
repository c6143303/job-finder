import React from 'react';
import Container from "../../../components/containers/Container";
import styles from "../styles.module.scss";
import Image from "next/image";
import cover from "../../../public/images/cover.jpg";
import SocialButton from "../../../components/buttons/SocialButton";
import Divider from "../../../components/custom/Divider";
import SubnavButton from "../../../components/nav/Subnav.Button";
import ProductCardV1 from "../../../components/cards/ProductCard";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from "../../../public/images/arrowRight.svg";
import HeartButton from "../../../components/buttons/HeartButton";
import {ILabel} from "../../../interfaces";
import BodySidebar from "./Body.Sidebar";
import BodyNav from "./Body.Nav";
import BodyContent from "./Body.Content";

const BodyLayout = () => {
    return (
        <Container>
            <div className={styles.body}>
                <BodySidebar/>
                <div className={styles.contentWrapper}>
                    <BodyNav/>
                    <BodyContent/>
                </div>
            </div>
        </Container>
    );
};

export default BodyLayout;