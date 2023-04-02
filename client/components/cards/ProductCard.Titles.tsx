import React from 'react';

const ProductCardTitles = ({title, role}: {title: string, role: string}) => {
    return (
        <>
            <h2 className={'body1 neutral8'}>{title}</h2>
            <p className={'captionBold neutral4'}>{role}</p>
        </>
    );
};

export default ProductCardTitles;