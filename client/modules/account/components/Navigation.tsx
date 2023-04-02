import React, {useContext} from 'react';
import styles from "./layout.module.scss";
import Image from "next/image";
import personIcon from "../../../public/images/person.svg";
import {Context} from "../store/Provider";
import {observer} from "mobx-react";

const Navigation = observer(() => {
    const store = useContext(Context)
    return (
        <div className={styles.navigation}>
            {store.userNavigation.map(({text, id}) => {
                return (
                    <div onClick={() => store.activeLink = id} key={text} className={`${styles.navigationItem} ${id == store.activeLink ? styles.active : ''}`}>
                        <Image src={personIcon.src} alt={'person icon'} width={personIcon.width} height={personIcon.height}/>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
    );
})

export default Navigation;