import React from 'react';
import styles from './divider.module.scss'

type TypeVariant = 'horizontal' | 'vertical'

interface IDivider {
    variant?: TypeVariant
}

interface IStyles {
    [key:string]: string
}

const $STYLES: IStyles = {
    'horizontal': styles.horizontal
}
const Divider: React.FC<IDivider> = ({variant = 'horizontal'}) => {
    return (
        <div className={$STYLES[variant]}/>
    );
};

export default Divider;