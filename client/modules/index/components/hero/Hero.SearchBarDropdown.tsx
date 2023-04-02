import React from 'react';
import styles from "./Hero.SearchBarDropdown.module.scss";
import Link from "next/link";

interface IOptions {
    value: string,
    id: number | string,
    link: string
}
interface IDropdown {
    options: IOptions[]
}

const HeroSearchBarDropdown:React.FC<IDropdown> = ({options}) => {
    return (
        <div className={styles.dropdown}>
            {options.map(e => {
                return (
                    <div className={styles.dropdownItem}>
                        <div className={styles.dropdownIcon}></div>
                        <Link href={e.link}>
                            <p>{e.value}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default HeroSearchBarDropdown;