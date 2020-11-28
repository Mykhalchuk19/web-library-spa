import * as yup from 'yup';
import { TAuthorsModalViewRules } from '../../../interfaces/authorsInterfaces';

const rules = yup.object<TAuthorsModalViewRules>({
  firstname: yup.string().required('Firstname is required'),
});

export default rules;
