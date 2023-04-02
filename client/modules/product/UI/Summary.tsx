import React, {useContext} from 'react';
import styles from "./summary.module.scss";
import arrowRight from "../../../public/images/arrowRight.svg";
import Image from "next/image";
import summary1 from '/public/images/summary1.svg'
import summary2 from '/public/images/summary2.svg'
import summary3 from '/public/images/summary3.svg'
import summary4 from '/public/images/summary4.svg'
import SummaryItem from "./Summary.Item";
import {Context} from "../store/Provider";
import {IProduct} from "../../../interfaces";

interface ISummary {
    id: string,
    product: IProduct
}

const Summary: React.FC<ISummary> = ({id, product}) => {
    return (
        <div id={id} className={styles.contentItem}>
            <p className={'body1body neutral8 mb-32'}>Job description</p>
            <ul className={styles.summaryList}>
                <SummaryItem icon={summary1} title={'Website'} subtitle={product.company.website}/>
                <SummaryItem icon={summary1} title={'Employees'}
                             subtitle={`${product.company.employeeAmount.from} - ${product.company.employeeAmount.till} employees`}/>
                <SummaryItem icon={summary1} title={'Location'} subtitle={product.company.location}/>
                <SummaryItem icon={summary1} title={'Contact email'} subtitle={product.company.contactPerson}/>
                <SummaryItem icon={summary1} title={'Contact email'} subtitle={product.company.contactEmail}/>
                <SummaryItem icon={summary1} title={'Contact phone'} subtitle={product.company.contactEmail}/>
            </ul>
        </div>
    );
};

export default Summary;