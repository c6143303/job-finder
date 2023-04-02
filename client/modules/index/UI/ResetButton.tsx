import React from 'react';
import resetIcon from 'public/images/clearIcon.svg'
import Image from "next/image";
import styles from './index.module.scss'

interface Interface {
    handler: () => void
}
const ResetButton:React.FC<Interface> = ({handler}) => {
    return (
        <>
            <div onClick={() => handler()} className={styles.button}>
                <Image src={resetIcon.src} alt={'reset icon'} width={resetIcon.width} height={resetIcon.height}/>
                <p>Reset filter</p>
            </div>
        </>
    );
};

export default ResetButton;