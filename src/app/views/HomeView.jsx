import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { URL_ADMIN_HOME } from '../shared/constants/urls/urlFrontEnd';
import { selectHasRole } from '../shared/redux-store/authenticationSlice';
import { ROLE_ADMIN } from './../shared/constants/rolesConstant';

const HomeView = () => {
    const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
    const navigate = useNavigate();
    return (
        <div>
            <p className="text-primary font-extrabold">HOME</p>

            {isAdmin && (
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(URL_ADMIN_HOME)}
                >
                    Admin
                </button>
            )}
        </div>
    );
};

export default HomeView;
