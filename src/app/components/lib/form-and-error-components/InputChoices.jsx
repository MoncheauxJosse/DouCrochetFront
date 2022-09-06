import { ErrorMessage, Field } from 'formik';
import React from 'react';

/**
 * Composant générique permettant de traiter une checkbox fait pour fonctionner avec Formik
 *
 * @param {String} label
 *
 * @exemple <Field name='rememberMe' label='Remember me' component={Checkbox} value={true} />
 * @author Peter Mollet
 */
export const Checkbox = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched },
    label,
    ...rest
}) => {
    return (
        <div className="flex items-center">
            <input
                id={name}
                name={name}
                type="checkbox"
                className={`checkbox ${
                    errors[name] && touched[name] && 'checkbox-error'
                }`}
                value={value}
                checked={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    );
};

/**
 * Composant générique permettant de traiter un radio btn fait pour fonctionner avec Formik
 *
 * @param {String} label
 *
 * @exemple <Field name='rememberMe' label='Remember me' component={Radio} value={true} />
 * @author Peter Mollet
 */
export const Radio = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched },
    label,
    ...rest
}) => {
    return (
        <div className="flex items-center">
            <input
                id={name}
                name={name}
                type="radio"
                className={`radio ${errors[name] && touched[name] && 'radio-error'}`}
                value={value}
                checked={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    );
};

export const RadioGroup = ({
    className,
    inline,
    name,
    options,
    valueSelected,
    ...rest
}) => {
    return (
        <div className={`${className} relative`}>
            <div className={inline && 'flex space-x-4'}>
                {options.map(({ label, value }, index) => (
                    <Field
                        key={index}
                        label={label}
                        id={name + value}
                        value={value}
                        checked={valueSelected === value}
                        name={name}
                        component={Radio}
                        {...rest}
                    />
                ))}
            </div>
            <ErrorMessage
                name={name}
                component="small"
                className="absolute text-xs text-red-500"
            />
        </div>
    );
};

export const CheckboxGroup = ({
    className,
    inline,
    name,
    options,
    valueSelected,
    ...rest
}) => {
    return (
        <div className={`${className} relative`}>
            <div className={inline && 'flex space-x-4'}>
                {options.map(({ label, value }, index) => (
                    <Field
                        key={index}
                        label={label}
                        id={name + value}
                        value={value}
                        checked={valueSelected.includes(value)}
                        name={name}
                        component={Checkbox}
                        {...rest}
                    />
                ))}
            </div>
            <ErrorMessage
                name={name}
                component="small"
                className="absolute text-xs text-red-500"
            />
        </div>
    );
};
