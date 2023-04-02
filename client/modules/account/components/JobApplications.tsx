import React, {useContext} from 'react';
import Body from "../UI/Body";
import ProductCard from "../../../components/cards/ProductCard";
import ProductCardV1 from "../../../components/cards/ProductCard";
import cover from '/public/images/cover.jpg'
import NotificationLabel from "../../../components/custom/NotificationLabel";
import styles from './layout.module.scss'
import {ILabel, Variant} from "../../../interfaces";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from '/public/images/arrowRight.svg'
import HeartButton from "../../../components/buttons/HeartButton";
import {Context} from "../store/Provider";
import {observer} from "mobx-react";
import Link from "next/link";

const $DATA: ILabel[] = [
    {label: 'process', variant: 'process'},
    {label: 'canceled', variant: 'canceled'},
    {label: 'approved', variant: 'approved'},
]
const JobApplications = observer(({role = 'user'}) => {
    const {companyProducts} = useContext(Context)
    return (
        <Body key={'applications'}>
            <Body.Label label={'Job applications'}/>
            <div className={styles.applications}>
                {companyProducts.map(({title,id, description }) => (
                    <Link key={id} href={`/post-job?edit=true&id=${id}`}>
                        <ProductCardV1>
                            <ProductCardV1.Cover imageSrc={cover}/>
                            <ProductCardV1.Content>
                                <ProductCardV1.Titles title={title} role={description}/>
                            </ProductCardV1.Content>
                            <ProductCardV1.Details refresh={true} id={1} deadline={new Date()}>
                                <div className={'flex-between'}>
                                    <DefaultButton iconSide={'right'} icon={arrowRight} buttonType={'filledIcon'} value={'Edit'}/>
                                </div>
                            </ProductCardV1.Details>
                        </ProductCardV1>
                    </Link>
                ))}
            </div>
        </Body>
    );
});

export default JobApplications;