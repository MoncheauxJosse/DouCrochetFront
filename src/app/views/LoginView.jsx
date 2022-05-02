import React from 'react';

import Login from './../components/account/Login';

/**
 * View/Page Login
 *
 * @param {object} history
 * @author Peter Mollet
 */
const LoginView = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <Login className="" />
        </div>
    );
};

export default LoginView;
