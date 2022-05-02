import * as Yup from 'yup';

export const schemaFormLogin = Yup.object().shape({
    username: Yup.string().required('Required input'),
    password: Yup.string().required('Required input'),
});
