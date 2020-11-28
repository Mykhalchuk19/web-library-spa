import { OptionsType, OptionTypeBase } from 'react-select';
import {
  useCallback, useEffect, useState,
} from 'react';
import { isEmpty } from 'ramda';
import { TAsyncSelectHook, TAsyncSelectHookProps } from '../../../interfaces/componentInterfaces';
import { translateHelpers } from '../../../utils/helpers';

const defaultObj = { label: translateHelpers.t('None', 'common'), value: null };

// eslint-disable-next-line max-len
const useCustomAsyncSelect = ({ value, asyncRequest, defaultValueFromProps }: TAsyncSelectHookProps): TAsyncSelectHook => {
  const correctDefaultValue = defaultValueFromProps || [];
  // eslint-disable-next-line max-len
  const [defaultValue, setDefaultValue] = useState(!isEmpty(correctDefaultValue) ? correctDefaultValue : defaultObj);
  // eslint-disable-next-line max-len
  console.log(defaultValue);
  const [defaultOptions, setDefaultOptions] = useState(Array(defaultValue) ? defaultValue : [defaultValue]);
  const autoCompleteRequest = useCallback(
    async (
      inputValue: string,
      id?: string | number | null,
    ) => {
      try {
        const { data: { autocomplete: options } } = await asyncRequest({ q: inputValue, id });

        if (options.length === 1 && id) return [...options]; // get_current_value

        if (options.length !== 0) return [defaultObj, ...options];

        return [defaultObj];
      } catch (e) {
        return e;
      }
    }, [asyncRequest],
  );

  const loadOptions = async (
    inputValue: string,
    callback: (options: OptionsType<OptionTypeBase>) => void,
  ) => {
    console.log(inputValue);
    await callback(await autoCompleteRequest(inputValue));
  };

  const getDefaultValue = useCallback(async () => {
    if (value && !Array(value)) {
      const options = await autoCompleteRequest('', value);
      setDefaultValue(options[0]);
    }
  }, [autoCompleteRequest, value]);

  const getDefaultOptions = useCallback(async () => {
    const options = await autoCompleteRequest('');
    setDefaultOptions(options);
  }, [autoCompleteRequest]);

  useEffect(() => {
    getDefaultValue();
    getDefaultOptions();
  }, [getDefaultValue, getDefaultOptions]);
  return {
    loadOptions,
    defaultValue,
    // @ts-ignore
    defaultOptions,
  };
};

export default useCustomAsyncSelect;
