import { ErrorMessage } from 'formik';
import React from 'react';

/**
 * Composant générique permettant de gérer facilement les Input simple (text, text-area, number) en utilisant MDB et Formik
 *
 * @param {String} placeholder: label de l'input, qui sera affiché
 * @param {Boolean} errorRight: Permet de mettre le message d'erreur sur la droite (par défaut étant à gauche)
 *
 * @example <Field type="email" name="email" placeholder="Email" component={ InsyInput } className='my-0'/>
 * @author Peter Mollet
 */
const Input = ({
    noError,
    errorRight,
    className,
    type,
    field: { name },
    field,
    form: { errors, touched },
    ...rest
}) => {
    return (
        <div className="relative">
            <input
                id={name}
                name={name}
                type={type}
                className={`input ${
                    errors[name] && touched[name] && 'input-error'
                } ${className} `}
                {...field}
                {...rest}
            />
            {!noError && (
                <ErrorMessage
                    name={field.name}
                    className={`text-xs text-red-500 absolute bottom-0 ${
                        errorRight ? 'right-0' : 'left-0'
                    }`}
                    component="small"
                />
            )}
        </div>
    );
};

export default Input;
