import * as yup from 'yup';
import { SignInValues } from '../../interfaces/authInterfaces';

const rules = yup.object<SignInValues>({
  username: yup.string().required('Username is required')
    .matches(/[A-Za-z0-9]+/, 'Incorrect format (only latin alphabet and numbers)'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(30, 'Password is too long'),
});

export default rules;
