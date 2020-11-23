import * as yup from 'yup';
import { TBooksModalViewRules } from '../../../../interfaces/booksInterfaces';

const rules = yup.object<TBooksModalViewRules>({
  title: yup.string().required('Title is required'),
});

export default rules;
