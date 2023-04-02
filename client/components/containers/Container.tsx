import React from 'react';

interface IContainer {
    children: React.ReactNode
    size?: 'small' | 'medium' | 'large'
}

const sizes = {
    'small': 'sm-container',
    'medium': 'container',
    'large': 'largeContainer'
}

const Container: React.FC<IContainer> = ({children, size = 'medium'}) => {
    return (
        <div className={sizes[size]}>
            {children}
        </div>
    );
};

export default Container;