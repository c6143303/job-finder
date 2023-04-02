import React from 'react';

interface IInputError {
    error: boolean | string
}
const InputError = ({error}:IInputError) => {
    if (!error) return null
    return (
        <div>
            <p className={'hairline2'} style={{color: 'red', marginTop: '12px'}}>{error}</p>
        </div>
    );
};

export default InputError;