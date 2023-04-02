'use client'
import React, {useContext, useEffect, useState} from 'react';

import styles from './styles.module.scss'
import Subnav from "../../../components/nav/Subnav";
import JobDescription from "../UI/JobDescription";
import Summary from "../UI/Summary";
import JobAnnounce from "../UI/JobAnnounce";
import {Context} from "../store/Provider";
import {IProduct} from "../../../interfaces";

const OPTIONS = [
    {value: 'Job description', isActive: false, slug: 'decription'},
    {value: 'Summary', isActive: false, slug: 'summary'},
    {value: 'About', isActive: false, slug: 'about'},
]
const Body = ({queryId, product}: { queryId: number, product: IProduct }) => {

    const navClickHandler = (index: number) => {
        window.location.href = `#${OPTIONS[index]["slug"]}`
    }
    return (
        <div className={styles.body}>
            <div className={styles.detail}>
                <div className={styles.content}>
                    <JobDescription id={'description'} href={'/'} subtitle={product.description}
                                    title={'Job description'}/>
                    <Summary product={product} id={'summary'}/>
                    <JobDescription id={'About company'} href={'/'} subtitle={product.company.about}
                                    title={'Company description'}/>
                </div>
                <JobAnnounce queryId={queryId} title={'Ready to apply for this job opening?'}
                             subtitle={'The best 16 passenger small group, intimate and unique, Milford Sound tour. Travel in unparalleled style and comfort in a premium Mercedes van equipped with large panoramic windows, leather reclining seats, quirky on board videos, free wifi and complimentary bottled water. From your accommodation enjoy the stunning scenic drive'}/>
            </div>
        </div>
    );
};

export default Body;