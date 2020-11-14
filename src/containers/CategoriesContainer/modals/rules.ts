import * as yup from 'yup';
import { TCategoriesModalViewRules } from '../../../interfaces/categoriesInterfaces';

const rules = yup.object<TCategoriesModalViewRules>({
  title: yup.string().required('Title is required'),
});

export default rules;
