import { useEffect } from "react";
import { useState } from "react";
import { getProfile } from "../api/backend/users";
import { getPayloadToken } from "../services/tokenServices";
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import Input from "../components/lib/form-and-error-components/Input";
import { updateUser } from "../api/backend/users";
import UpdateOneUser from '../components/account/updateUser';

const ProfileView = () => {

    return(
        <div>
            <UpdateOneUser/>
        </div>
    )
}

export default ProfileView;