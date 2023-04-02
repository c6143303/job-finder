"use client"
import React, {SyntheticEvent, useContext, useState} from 'react';
import styles from './index.module.scss'
import DropdownV1 from "../../../../components/dropdown/Dropdown_v1";
import {Context} from "../../store/Provider";
import {ISortOptions} from "../../../../interfaces";
import {observer} from "mobx-react";

const NavLayout = observer(() => {

    return (
        <div className={styles.nav}>

        </div>
    );
});

export default NavLayout;