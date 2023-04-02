import React from 'react';

const ErrorPage = ({statusCode = '400'}: {statusCode: string}) => {
    return (
        <div>
            <p>{statusCode}</p>
        </div>
    );
};

export default ErrorPage;