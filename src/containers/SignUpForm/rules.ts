import * as yup from 'yup';
import { Values } from './SignUpForm';

const rules = yup.object<Values>({
  username: yup.string().required('Username is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(30, 'Password is too long'),
});

export default rules;