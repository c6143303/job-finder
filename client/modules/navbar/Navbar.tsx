"use client"
import React, {memo, useContext, useEffect, useState} from 'react';

import styles from './index.module.scss'
import Image from "next/image";
import NavbarDropdown from "./Navbar.Dropdown";
import DefaultButton from "../../components/buttons/DefaultButton";
import logo from '/public/images/logo.png';
import avatar from '/public/images/avatar.src.jpg'
import NavbarAvatar from "./Navbar.Avatar";
import SignupModal from "./modals/SignupModal";
import {Context} from "../index/store/Provider";
import {observer} from "mobx-react";
import SignInModal from "./modals/SignInModal";
import Link from "next/link";
import Container from "../../components/containers/Container";
import {useRouter} from "next/navigation";
import {Context as AuthContext} from '../auth/store/Provider'
import {Context as NavContext} from './store/Provider'
import Provider from "./store/Provider";
import AuthService from "../../services/AuthService";
import CompanyService from "../../services/CompanyService";
import {ProductService} from "../../services/ProductService";
import {ICompany} from "../../interfaces";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const DROPDOWN_OPTIONS = [
    {id: 0, value: 'some val', link: '/'},
    {id: 1, value: 'some val', link: '/'},
    {id: 2, value: 'some val', link: '/'},
]

const Navbar = observer(() => {
    const router = useRouter()
    const authStore = useContext(AuthContext)
    const navStore = useContext(NavContext)

    return (
        <Provider>
            <SignupModal/>
            <SignInModal/>
            <nav className={styles.navbar}>
                <Container>
                    <div className={styles.navbarContainer}>
                        <div className={styles.left}>
                            <Link href={'/'} className={styles.logo}>
                                <Image src={logo} alt={'logo'} width={106} height={36}/>
                            </Link>
                            <div className={`divider ${styles.mrl40}`}/>
                            <NavbarDropdown options={DROPDOWN_OPTIONS} headValue={'Menu'}/>
                        </div>
                        <div className={styles.right}>
                            {authStore.isAuth ?
                                <>
                                    <Link href={'/post-job/'}>
                                        <DefaultButton className={styles.mr12} buttonType={'filled'}
                                                       value={'Post job'}/>
                                    </Link>
                                    <DefaultButton onClick={e => AuthService.signOut()} className={styles.mr12}
                                                   buttonType={'border'} value={'Sign out'}/>
                                    <Link href={'/account/'}>
                                        <NavbarAvatar src={authStore.company.logo} className={''}/>
                                    </Link>
                                </>
                                :
                                <>
                                    <DefaultButton onClick={() => navStore.showSignUp = true} className={styles.mr12}
                                                   buttonType={'filled'} value={'Sign up'}/>
                                    <DefaultButton onClick={() => navStore.showSignIn = true} className={styles.mr12}
                                                   buttonType={'border'} value={'Sign in'}/>
                                </>
                            }
                        </div>
                    </div>
                </Container>
            </nav>
        </Provider>
    );
})

export default Navbar;