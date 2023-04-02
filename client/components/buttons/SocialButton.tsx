import React from 'react';

import styles from './socialButton.module.scss'

interface ISocialButton {
    href: string,
    type: 'facebook' | 'twitter' | 'instagram'
}
const SocialButton:React.FC<ISocialButton> = ({href, type}) => {
    return (
        <a className={styles[type]} href={href}></a>
    );
};

export default SocialButton;