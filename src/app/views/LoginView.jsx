import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { URL_HOME } from '../constants/urls/urlFrontEnd';
import Login from './../components/account/Login';
import { selectIsLogged } from '../redux-store/authenticationSlice';

// Page login
const LoginView = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsLogged);
// Si l'utilisateur est connecté, on retourne vers home
    useEffect(() => {
        if (isAuthenticated) navigate(URL_HOME);
    }, []);

    return (
        <div className="login-page bg-light-yellow flex h-full flex-col items-center justify-center">
            <Login />
        </div>
    );
};

export default LoginView;
