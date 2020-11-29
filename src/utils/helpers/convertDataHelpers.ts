import { isEmpty, isNil } from 'ramda';
import { t } from './translate';
import { TAsyncOption } from '../../interfaces/componentInterfaces';

const NONE = t('None', 'common');

export const createFullName = (
  firstname: string,
  lastname: string,
): string => `${firstname} ${lastname}`;

export const convertEmptyValueForShow = (
  value?: string | number | null,
): any => {
  if (typeof value === 'string' && isEmpty(value.trim())) return t('N/A', 'common');
  if (isEmpty(value) || isNil(value)) return t('N/A', 'common');
  return value;
};

type TActionInfo = {
  action: string,
  name?: string,
  option?: TAsyncOption
}

enum selectActions {
  CLEAR = 'clear',
  REMOVE_VALUE = 'remove-value',
  SELECT_OPTION = 'select-option'
}

export const asyncMultiSelectHelperForValues = (
  option: Array<TAsyncOption> | null,
  actionInfo: TActionInfo,
): Array<number | null> => {
  if (actionInfo.action === selectActions.CLEAR) {
    return [null];
  }
  if (actionInfo
    && actionInfo.action === selectActions.SELECT_OPTION
    && actionInfo.option
    && actionInfo.option.value == null) {
    return [null];
  }
  if (option === null) return [null];
  return [...option.filter((
    opt: TAsyncOption,
  ) => opt.value !== null).map((
    opt: TAsyncOption,
  ) => opt.value)];
};

export const asyncMultiSelectHelper = (
  option: Array<TAsyncOption> | null,
  actionInfo: TActionInfo,
): Array<TAsyncOption> => {
  if (actionInfo.action === selectActions.CLEAR) {
    return [{ label: NONE, value: null }];
  }
  if (actionInfo
    && actionInfo.action === selectActions.SELECT_OPTION
    && actionInfo.option
    && actionInfo.option.value == null) {
    return [{ label: NONE, value: null }];
  }
  if (option === null) return [{ label: NONE, value: null }];

  return [...option.filter((opt: TAsyncOption) => opt.value !== null)];
};
