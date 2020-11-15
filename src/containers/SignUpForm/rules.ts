import * as yup from 'yup';
import { SignUpValues } from '../../interfaces/authInterfaces';

const rules = yup.object<SignUpValues>({
  username: yup.string().required('Username is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(30, 'Password is too long'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Passwords are not matched')
    .required('This field is required'),
});

export default rules;
