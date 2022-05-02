import React from 'react';
import IdleTimer from 'react-idle-timer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signOut } from '../../shared/redux-store/authenticationSlice';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component to automatically handle deconnection after a certain time
 *
 * @author Peter Mollet
 */
const IdleTimerCustom = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const timeOut = 1000 * 60 * 15;

    const handleOnAction = () => clearTimeout(timeOut);

    const handleOnIdle = () => {
        toast.warn('Idle timed out');
        dispatch(signOut());
        history.push(URL_HOME);
    };

    return (
        <IdleTimer
            timeout={timeOut}
            onActive={handleOnAction}
            onIdle={handleOnIdle}
            onAction={handleOnAction}
            debounce={500}
        />
    );
};

export default IdleTimerCustom;
