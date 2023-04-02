import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

import arrowRight from '/public/images/arrowRight.svg'
import styles from './smallCircle.module.scss'
import Image from "next/image";
interface ISmallCircle extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    size?: 'small' | 'medium' | 'large'
    icon? : ImageData
    color?: 'blue' | 'green' | 'red' | 'black'
}

const colors = {
    blue: '$neutral1',
    green: '$neutral1',
    red: '$neutral1',
    black: '$neutral1'
}
const SmallCircle:React.FC<ISmallCircle> = ({size = 'small', icon = arrowRight, color= 'blue', ...props}) => {
    return (
        <button {...props} className={`${styles[size]} ${styles[color]} ${props.className}`}>
            <Image src={icon.src} width={icon?.width} height={icon?.height} alt={'icon'}/>
        </button>
    );
};

export default SmallCircle;