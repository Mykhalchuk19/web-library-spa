import * as yup from 'yup';
import { Values } from './useProfile';

const rules = yup.object<Values>({
  username: yup.string().required('Username is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required'),
});

export default rules;
