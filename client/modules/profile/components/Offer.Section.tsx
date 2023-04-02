import React from 'react';
import styles from "../styles.module.scss";
import ProductCardV1 from "../../../components/cards/ProductCard";
import cover from "../../../public/images/cover.jpg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from "../../../public/images/arrowRight.svg";
import HeartButton from "../../../components/buttons/HeartButton";
import {ILabel} from "../../../interfaces";
import SectionWrapper from "../UI/SectionWrapper";

const $DATA: ILabel[] = [
    {label: 'process', variant: 'process'},
    {label: 'canceled', variant: 'canceled'},
    {label: 'approved', variant: 'approved'},
]

const OfferSection = () => {
    return (
        <SectionWrapper title={'Offers'}>
            <div className={styles.products}>
                {$DATA.map(({label, variant}) => (
                    <ProductCardV1 key={label}>
                        <ProductCardV1.Cover imageSrc={cover}/>
                        <ProductCardV1.Content>
                            <ProductCardV1.Titles title={'some title'} role={'description'}/>
                        </ProductCardV1.Content>
                        <ProductCardV1.Details refresh={true} id={1} deadline={new Date()}>
                            <div className={'flex-between'}>
                                <DefaultButton iconSide={'right'} icon={arrowRight} buttonType={'filledIcon'}
                                               value={'View'}/>
                                <HeartButton style={{marginLeft: 8 + 'px'}} active={false}/>
                            </div>
                        </ProductCardV1.Details>
                    </ProductCardV1>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default OfferSection;