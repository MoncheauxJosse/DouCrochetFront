import '../../css/Register.css'
import { Field, Form, Formik, ErrorMessage } from 'formik';
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
        firstname: Yup.string().min(2, "Prénom trop court").max(30, "Prénom trop long").required('Prénom obligatoire'),
        lastname: Yup.string().min(2, "Nom trop court").max(30, "Nom trop long").required('Nom obligatoire'),
        birthdate: Yup.date().min('01-01-1900','Date de naissance invalide').max(new Date, 'Date de naissance invalide').required('Date obligatoire'),
        telephone: Yup.number().required('Telephone obligatoire'),
        password: Yup.string().min(8, 'minimum 8 caractères').required('Mot de passe obligatoire'),
        confirmPassword: Yup.string().min(8, 'minimum 8 caractères').required('Mot de passe obligatoire'),
        email: Yup.string().email('email invalide').required('e-mail obligatoire'),
        country: Yup.string().required('Pays obligatoire'),
        cityCode: Yup.number().max(999999, "Maximum 6 chiffres").typeError("Le code postal doit être un nombre").required('Code postal obligatoire'),
        number: Yup.string().required('Numéro de rue obligatoire'),
        street: Yup.string().required('Rue obligatoire'),
        city: Yup.string().required('Ville obligatoire'),
    });
    return (
        <Formik
        initialValues={defaulValuesLogin}
        onSubmit={submit}
        validationSchema={schemaFormLogin}
        >
            <Form className="mt-8 space-y-6 w-96 rounded-md bg-light-pink flex justify-center pt-8 pb-8">
                <div className="w-80 ">
                    <div className="shadow-sm">
                        <div className="">
                            <Field
                                type="text"
                                name="firstname"
                                placeholder="Prenom"
                                autoComplete="firstname"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                            <ErrorMessage
                                name="firstname"
                                component="small"
                                className="text-red-500"
                            />
                            <Field
                                type="text"
                                name="lastname"
                                placeholder="Nom"
                                autoComplete="lastname"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                            <ErrorMessage
                                name="lastname"
                                component="small"
                                className="text-red-500"
                            />
                        </div>
                            <Field
                                type="date"
                                name="birthdate"
                                placeholder="Date de naissance"
                                autoComplete="birthdate"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                            <ErrorMessage
                                name="birthdate"
                                component="small"
                                className="text-red-500"
                            />
                            <Field
                                type="text"
                                name="telephone"
                                placeholder="télephone"
                                autoComplete="telephone"
                                component={Input}
                                className="rounded-md"
                                noError
                            />
                            <ErrorMessage
                                name="telephone"
                                component="small"
                                className="text-red-500"
                            />
                        <Field
                            type="email"
                            name="email"
                            placeholder="e-mail"
                            autoComplete="email"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <ErrorMessage
                                name="email"
                                component="small"
                                className="text-red-500"
                            />
                    </div>
                    <div class="pt-4">
                        <Field
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            autoComplete="password"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <ErrorMessage
                                name="password"
                                component="small"
                                className="text-red-500"
                            />
                        <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="confirmer votre mot de passe"
                            autoComplete="current-password"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <ErrorMessage
                            name="confirmPassword"
                            component="small"
                            className="text-red-500"/>
                    </div>
                    <div class="pt-4">
                        <Field
                            type="text"
                            name="country"
                            placeholder="Pays"
                            autoComplete="country"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <ErrorMessage
                                name="country"
                                component="small"
                                className="text-red-500"
                                message="Utiliser que des chiffres"
                        />
                        <Field
                            type="text"
                            name="cityCode"
                            placeholder="Code Postal"
                            autoComplete="cityCode"
                            component={Input}
                            className="rounded-md"
                        />
                        <ErrorMessage
                                name="cityCode"
                                component="small"
                                className="text-red-500"
                                message="Utiliser que des chiffres"
                        />
                        <Field
                            type="text"
                            name="number"
                            placeholder="Numéro de rue"
                            autoComplete="number"
                            component={Input}
                            className="rounded-b-md"
                            noError
                        />
                                    <ErrorMessage
                                name="number"
                                component="small"
                                className="text-red-500"
                                message="Utiliser que des chiffres"
                        />
                        <Field
                            type="text"
                            name="street"
                            placeholder="Rue"
                            autoComplete="street"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <ErrorMessage
                                name="street"
                                component="small"
                                className="text-red-500"
                                message="Utiliser que des chiffres"
                        />
                        <Field
                            type="text"
                            name="city"
                            placeholder="Ville"
                            autoComplete="city"
                            component={Input}
                            className="rounded-md"
                            noError
                        />
                        <ErrorMessage
                                name="city"
                                component="small"
                                className="text-red-500"
                                message="Utiliser que des chiffres"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn bg-light-yellow text-dark-pink group relative w-full mt-4"
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
      register(values).then(
        
      )
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