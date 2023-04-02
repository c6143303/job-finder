import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

import styles from './heartButton.module.scss'
import heartFilled from '/public/images/heard-filled.svg'
import Image from "next/image";
interface IRoundButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    active?: boolean
}
const HeartButton:React.FC<IRoundButton> = ({active = false, ...props}) => {
    return (
        <button {...props} className={active ? styles.buttonActive : styles.button}>
        </button>
    );
};

export default HeartButton;