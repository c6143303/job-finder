import React from 'react';

interface Interface {
    min: number
    max: number
}
const RangeOutput:React.FC<Interface> = ({min, max}) => {
    return (
        <div className={'flex-between'}>
            <p className={'captionBold neutral8'}>{min}</p>
            <p className={'captionBold neutral8'}>{max}</p>
        </div>
    );
};

export default RangeOutput;