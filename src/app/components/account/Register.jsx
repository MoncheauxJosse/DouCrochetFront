import '../../css/Register.css'
import { Field, Form, Formik } from 'formik';
import Input from '../lib/form-and-error-components/Input';
import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './../../api/backend/account';
import { URL_HOME } from '../../constants/urls/urlFrontEnd';
import * as Yup from 'yup';

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

const FormRegister = ({ submit, errorLog }) => {
    const defaulValuesLogin = {
        firstname: '',
        lastname:'',
        birthdate:'',
        telephone:'',
        password: '',
        Confirmpassword:'',
        email:'',
        country:'',
        cityCode:'',
        number:'',
        street:'',
        city:'',
        rememberMe: false,
    };
 const schemaFormLogin = Yup.object().shape({
    firstname: Yup.string().required('Required input'),
        lastname: Yup.string().required('Required input'),
        birthdate: Yup.string().required('Required input'),
        telephone: Yup.string().required('Required input'),
        password: Yup.string().required('Required input'),
        Confirmpassword: Yup.string().required('Required input'),
        email: Yup.string().required('Required input'),
        country: Yup.string().required('Required input'),
        cityCode: Yup.string().required('Required input'),
        number: Yup.string().required('Required input'),
        street: Yup.string().required('Required input'),
        city: Yup.string().required('Required input'),
    });
    return (
        <Formik
        initialValues={defaulValuesLogin}
        onSubmit={submit}
        validationSchema={schemaFormLogin}
        >
            <Form className="mt-8 space-y-6 w-96 rounded-md bg-pink-light flex justify-center pt-4 pb-4">
                <div className="w-80 ">
                    <div className="shadow-sm">
                        <div className="flex flex-row">
                            <Field
                                type="text"
                                name="firstname"
                                placeholder="firstname"
                                autoComplete="firstname"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                            <Field
                                type="text"
                                name="lastname"
                                placeholder="lastname"
                                autoComplete="lastname"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                        </div>
                            <Field
                                type="text"
                                name="birthdate"
                                placeholder="birthdate"
                                autoComplete="birthdate"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                            <Field
                                type="text"
                                name="telephone"
                                placeholder="telephone"
                                autoComplete="telephone"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                    </div>
                    <div class="pt-4">
                        <Field
                            type="text"
                            name="email"
                            placeholder="email"
                            autoComplete="email"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <Field
                            type="password"
                            name="password"
                            placeholder="password"
                            autoComplete="password"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <Field
                            type="password"
                            name="Confirmpassword"
                            placeholder="confirm your Password"
                            autoComplete="current-password"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                    </div>
                    <div class="pt-4">
                        <Field
                            type="text"
                            name="country"
                            placeholder="country"
                            autoComplete="country"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <Field
                            type="text"
                            name="cityCode"
                            placeholder="cityCode"
                            autoComplete="cityCode"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <Field
                            type="text"
                            name="number"
                            placeholder="number"
                            autoComplete="number"
                            component={Input}
                            className="rounded-b-md"
                            noError
                        />
                        <Field
                            type="text"
                            name="street"
                            placeholder="street"
                            autoComplete="street"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <Field
                            type="text"
                            name="city"
                            placeholder="city"
                            autoComplete="city"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn bg-beige-light text-pink-dark group relative w-full mt-4"
                        >
                            Register
                        </button>
                    </div>
                    {errorLog && (
                        <ErrorMessSmall middle message="incorrect(s)" />
                    )}
                </div>
            </Form>
        </Formik>
    );
};

const Register = () => {
    const navigate = useNavigate();
    const handleRegister=(values)=>{
      console.log("handleregister")

      register(values)
    //   if(values){
    //       navigate(URL_HOME);
    //   }
    };

    
    return (
        <div class="">
            <FormRegister submit={handleRegister}/>
        </div>
    )
}
export default Register;