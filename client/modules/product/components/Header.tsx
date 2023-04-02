import React, {useContext} from 'react';

import styles from './styles.module.scss'
import JobInfoItem from "../UI/JobInfoItem";
import person from "../../../public/images/person.svg";
import flag from "../../../public/images/flag.svg";
import Image from "next/image";
import Link from "next/link";
import {IProduct} from "../../../interfaces";
import BackJobsButton from "./BackJobsButton";
import ApplyJobButton from "./ApplyJobButton";

const Header: ({
                   product,
                   queryId
               }: { product: IProduct, queryId: number }) => Promise<JSX.Element> = async function ({product, queryId}) {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.navigation}>
                    <BackJobsButton/>
                </div>
                <div className={styles.jobInfo}>
                    <div className={styles.jobInfoLeft}>
                        <div className={styles.jobInfoCard}>
                            <Link href={'/profile/profile-slug'}>
                                <Image className={styles.jobInfoImage}
                                       src={`${process.env.NEXT_PUBLIC_BASE_URL}${product?.imageSrc}`}
                                       alt={'company image'}
                                       width={160}
                                       height={160}/>
                            </Link>
                            <div className={styles.jobInfoTitles}>
                                <h2 className={'headline2 mb-10 neutral8'}>{product.title}</h2>
                                <p className={'neutral4 captionBold'}>{product.position}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.jobInfoRight}>
                        <div className={styles.jobInfoBreads}>
                            <JobInfoItem icon={person} value={`€ ${product.salaryFrom} - ${product.salaryFrom}`}/>
                            <JobInfoItem icon={flag} value={`Deadline - 2023-02-28`}/>
                        </div>
                        <ApplyJobButton queryId={queryId}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header