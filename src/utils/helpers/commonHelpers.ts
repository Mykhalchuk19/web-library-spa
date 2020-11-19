import { equals } from 'ramda';

type TObject = {
    [key: string]: number | string | boolean | null | undefined,
}

const checkValuesBeforeRequest = (
  initialValues: TObject,
  currentValues: TObject,
): boolean => equals(initialValues, currentValues);

export {
  checkValuesBeforeRequest,
};
