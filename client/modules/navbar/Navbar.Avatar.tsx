import React from 'react';
import defaultAvatar from '../../public/images/avatar.src.jpg'
interface IAvatar {
    src: string | null | undefined
    className?: string
}
import styles from './index.module.scss'
import Image, {StaticImageData} from "next/image";
const NavbarAvatar:React.FC<IAvatar> = ({src, className}) => {
    return (
        <div className={`${styles.avatar} ${className}`}>
            <Image src={src ? `${process.env.NEXT_PUBLIC_BASE_URL}${src}` : defaultAvatar.src} alt={'profileAvatar'} height={40} width={40}/>
        </div>
    );
};

export default NavbarAvatar;