import * as yup from 'yup';
import { TResetPasswordValues } from '../../interfaces/authInterfaces';

const rules = yup.object<TResetPasswordValues>({
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(30, 'Password is too long'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Passwords are not matched')
    .required('This field is required'),
});

export default rules;
