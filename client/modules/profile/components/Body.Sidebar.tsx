import React from 'react';
import styles from "../styles.module.scss";
import Image from "next/image";
import cover from "../../../public/images/cover.jpg";
import SocialButton from "../../../components/buttons/SocialButton";
import Divider from "../../../components/custom/Divider";

const BodySidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profile}>
                <Image className={styles.profileAvatar} src={cover.src} alt={'profile avatar'} height={160} width={160}/>
                <p className={'headline3 neutral8'}>
                    Medium
                </p>
                <p className={'caption2'}>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</p>
                <div className={styles.profileListItem}>
                    <p className={'captionBold'}>Employees</p>
                    <p className={styles.dash}>-</p>
                    <a href={'/'} className={'captionBold neutral8'}>Magebit.com</a>
                </div>
            </div>
            <div className={styles.social}>
                <SocialButton href={'/'} type={'facebook'}/>
                <SocialButton href={'/'} type={'instagram'}/>
                <SocialButton href={'/'} type={'twitter'}/>
            </div>
            <Divider/>
            <p>Member since Mar 15, 2021</p>
        </div>
    );
};

export default BodySidebar;