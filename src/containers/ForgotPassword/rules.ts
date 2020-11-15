import * as yup from 'yup';
import { TForgotPasswordValues } from '../../interfaces/authInterfaces';

const rules = yup.object<TForgotPasswordValues>({
  email: yup.string().required('Email is required'),
});

export default rules;
