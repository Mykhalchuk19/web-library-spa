import * as yup from 'yup';
import { IUserValues } from '../../../../interfaces/userInterfaces';

const rules = yup.object<IUserValues>({
  username: yup.string().required('Username is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required'),
});

export default rules;
