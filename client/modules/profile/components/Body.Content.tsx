import React, {useContext} from 'react';
import styles from "../styles.module.scss";
import ProductCardV1 from "../../../components/cards/ProductCard";
import cover from "../../../public/images/cover.jpg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from "../../../public/images/arrowRight.svg";
import HeartButton from "../../../components/buttons/HeartButton";
import {ILabel} from "../../../interfaces";
import {Context} from "../store/Provider";
import OfferSection from "./Offer.Section";
import AboutSection from "./About.Section";
import {observer} from "mobx-react";

const BodyContent = observer(() => {
    const store = useContext(Context)

    if (store.activeOption === 0) return <OfferSection/>
    if (store.activeOption === 1) return <AboutSection/>
    return null
});

export default BodyContent;