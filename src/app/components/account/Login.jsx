import { LockClosedIcon } from '@heroicons/react/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../shared/components/form-and-error-components/Input';
import { URL_HOME } from '../../shared/constants/urls/urlFrontEnd';
import { signIn } from '../../shared/redux-store/authenticationSlice';
import { authenticate } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { Checkbox } from './../../shared/components/form-and-error-components/InputChoices';

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
        username: '',
        password: '',
        rememberMe: false,
    };
    const schemaFormLogin = Yup.object().shape({
        username: Yup.string().required('Required input'),
        password: Yup.string().required('Required input'),
    });

    return (
        <Formik
            initialValues={defaulValuesLogin}
            onSubmit={submit}
            validationSchema={schemaFormLogin}
        >
            <Form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <Field
                        type="text"
                        name="username"
                        placeholder="Login"
                        autoComplete="username"
                        component={Input}
                        className="rounded-none rounded-t-md"
                        noError
                    />
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        component={Input}
                        className="rounded-none rounded-b-md"
                        noError
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Field
                        name="rememberMe"
                        label="Remember me"
                        component={Checkbox}
                        value={true}
                    />
                    <div className="text-sm">
                        <Link to="/forgot-password">
                            <span className="font-medium text-primary-dark hover:text-primary cursor-pointer">
                                Forgot your password?
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative btn btn-primary w-full"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon
                                className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
                                aria-hidden="true"
                            />
                        </span>
                        Sign in
                    </button>
                </div>
                {errorLog && (
                    <ErrorMessSmall middle message="Login/Password incorrect(s)" />
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
        authenticate(values)
            .then((res) => {
                if (res.status === 200 && res.data.id_token) {
                    dispatch(signIn(res.data.id_token));
                    navigate(URL_HOME);
                }
            })
            .catch(() => setErrorLog(true));
    };

    return (
        <div className="bg-white p-4 rounded-md shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center">
                    <img
                        className="h-12 w-auto sm:h-10 cursor-pointer"
                        src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
                        alt=""
                        width={200}
                        height={60}
                    />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Sign in to your account
                </h2>
            </div>

            <hr />
            <FormLogin errorLog={errorLog} submit={handleLogin} />
        </div>
    );
};

export default Login;
