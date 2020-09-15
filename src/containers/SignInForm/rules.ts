import * as yup from 'yup';
import { Values } from './SignInForm';

const rules = yup.object<Values>({
  username: yup.string().required('Username is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(30, 'Password is too long'),
});

export default rules;
