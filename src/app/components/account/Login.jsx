import { LockClosedIcon } from '@heroicons/react/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { URL_HOME } from '../../constants/urls/urlFrontEnd';
import { signIn } from '../../redux-store/authenticationSlice';
import ErrorMessSmall from '../lib/form-and-error-components/ErrorMessSmall';
import Input from '../lib/form-and-error-components/Input';
import { Checkbox } from '../lib/form-and-error-components/InputChoices';
import { authenticate } from './../../api/backend/account';

/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */
const FormLogin = ({ submit, errorLog }) => {
    const defaulValuesLogin = {
        email: '',
        password: '',
        rememberMe: false,
    };
    const schemaFormLogin = Yup.object().shape({
        email: Yup.string().required('Required input'),
        password: Yup.string().required('Required input'),
    });

    return (
        <Formik
            initialValues={defaulValuesLogin}
            onSubmit={submit}
            validationSchema={schemaFormLogin}
        >
            <Form className="mt-8 space-y-6">
                <div className="-space-y-px rounded-md shadow-sm">
                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        component={Input}
                        className="rounded-none rounded-t-md"
                        noError
                    />
                    <Field
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        component={Input}
                        className="rounded-none rounded-b-md"
                        noError
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Field
                        name="rememberMe"
                        label="Se souvenir de moi"
                        component={Checkbox}
                        value={true}
                    />
                    <div className="text-sm">
                        <Link to="/forgot-password">
                            <span className="cursor-pointer font-medium text-primary-dark hover:text-primary">
                                Mot de passe oublié ?
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary group relative w-full"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                                className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
                                aria-hidden="true"
                            />
                        </span>
                        Se connecter
                    </button>
                </div>
                {errorLog && (
                    <ErrorMessSmall middle message="Email ou mot de passe incorrect(s)" />
                )}
            </Form>
        </Formik>
    );
};

/**
 * Component Login
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet
 */
const Login = () => {
    const [errorLog, setErrorLog] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (values) => {
        console.log(values)
        authenticate(values)

            .then((res) => {
                console.log(res)
                if (res.status === 200 && res.data.token) {
                    dispatch(signIn(res.data.token));
                    navigate(URL_HOME);
                }
            })
            .catch(() => setErrorLog(true));
    };

    return (
        <div className="w-full max-w-md space-y-8 rounded-md bg-white p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center">
                    <img
                        className="h-12 w-auto cursor-pointer sm:h-10"
                        src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
                        alt=""
                        width={200}
                        height={60}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Se connecter
                </h2>
            </div>

            <hr />
            <FormLogin errorLog={errorLog} submit={handleLogin}/>
        </div>
    );
};

export default Login;
