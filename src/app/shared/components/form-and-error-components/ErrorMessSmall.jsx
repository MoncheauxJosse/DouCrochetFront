import React from 'react';

/**
 * Component permettant d'afficher un message d'erreur en Small / Red (utilisé notamment pour les formulaires)
 *
 * @param message: le message à afficher
 * @param {boolean} right: si true, le composant sera en float-right
 * @param {boolean} left: si true, le composant sera en float-left
 * @author Peter Mollet
 *
 */
const ErrorMessSmall = ({ message, right, left, middle }) => {
    const body = (
        <small
            className={`text-red-500
                ${right && 'float-right'} 
                ${left && 'float-left'}`}>
            {message}
        </small>
    );

    if (middle) return <div className="text-center">{body}</div>;
    return body;
};

export default ErrorMessSmall;
