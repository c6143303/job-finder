import React, {useState} from 'react';
import styles from './index.module.scss'
interface INavbar {
    options: {
        id: number | string
        value: string
        link: string
    }[]
    headValue: string
}
const NavbarDropdown:React.FC<INavbar> = ({options, headValue = 'undefined'}) => {

    return (
        <div className={styles.dropdown}>
            <div className={styles.head}>
                <p className={'button2'}>
                    {headValue}
                </p>
                <div className={styles.icon}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.bodyContainer}>
                    {options.map(el => {
                        return (
                            <div key={el.id} className={styles.item}>
                                <a href={el.value}>{el.value}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavbarDropdown;