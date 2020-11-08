import * as yup from 'yup';
import { TUserRules } from '../../../../interfaces/userInterfaces';

const rules = yup.object<TUserRules>({
  username: yup.string().required('Username is required'),
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required'),
  type: yup.string().required('Role is required'),
});

export default rules;
