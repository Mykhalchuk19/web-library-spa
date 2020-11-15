import { isEmpty, isNil } from 'ramda';
import { t } from './translate';

export const createFullName = (
  firstname: string,
  lastname: string,
): string => `${firstname} ${lastname}`;

export const convertEmptyValueForShow = (
  value: string | number | null,
): any => {
  if (typeof value === 'string' && isEmpty(value.trim())) return t('N/A', 'common');
  if (isEmpty(value) || isNil(value)) return t('N/A', 'common');
  return value;
};
