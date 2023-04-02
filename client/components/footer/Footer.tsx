'use client'
import React from 'react';
import styles from './styles.module.scss'
import Divider from "../custom/Divider";
import logo from '/public/images/logo.png'
import Image from "next/image";
import Link from "next/link";
import DefaultInput from "../inputs/DefaultInput";
import useForm from "../../hooks/UseForm";
import Container from "../containers/Container";
import SmallCircle from "../buttons/SmallCircle";

const Footer = () => {
    const data = {
        fields: {
            message: {
                value: '',
                rules: 'required'
            },
        }
    }
    const submitHandler = () => {
        console.log('click')
    }
    const formData = useForm(data, submitHandler)

    return (
        <div id={'footer'} className={styles.footer}>
            <Container>
                <div className={styles.footerHead}>
                    <div className={styles.logo}>
                        <Image src={logo.src} alt={'logo'} width={94} height={32}/>
                    </div>
                    <div className={styles.nav}>
                        {[1, 2, 3].map((e, id) => {
                            return (
                                <div key={id} className={styles.navItem}>
                                    <Link href={'/'}>Home</Link>
                                    <Link href={'/'}>Home</Link>
                                </div>
                            )
                        })}
                    </div>
                    <form className={styles.form}>
                        <p className={'hairline2 neutral8 mb-16'}>Join our community 🔥</p>
                        <div className={styles.formItem}>
                            <DefaultInput placeholder={'Type email'} variant={'round'} value={formData.values['fields']['message']['value']}
                                          onChange={formData.changeHandler} name={'message'}/>
                            <SmallCircle className={styles.formButton} size={'medium'}/>
                        </div>
                    </form>
                </div>
                <Divider/>
                <div className={styles.footerBottom}>
                    <p className={'neutral4'}>Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;