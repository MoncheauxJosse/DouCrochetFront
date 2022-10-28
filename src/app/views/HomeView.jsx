import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p className="font-extrabold text-primary">HOME</p>
            <p className="font-extrabold text-primary">DASHBOARS</p>
        </div>
    );
};

export default HomeView;
