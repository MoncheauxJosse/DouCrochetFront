import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { ROLE_ADMIN } from '../constants/rolesConstant';
// import { URL_ADMIN_HOME } from '../constants/urls/urlFrontEnd';
// import { selectHasRole } from '../redux-store/authenticationSlice';

const HomeView = () => {
    // const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
    const navigate = useNavigate();
    return (
        <div>
            <p className="font-extrabold text-primary">HOME</p>
            <p className="font-extrabold text-primary">DASHBOARS</p>

            {/* {isAdmin && (
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(URL_ADMIN_HOME)}
                >
                    Admin
                </button>
            )} */}
        </div>
    );
};

export default HomeView;
