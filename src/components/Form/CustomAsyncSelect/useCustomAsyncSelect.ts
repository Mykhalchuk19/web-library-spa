import { OptionsType, OptionTypeBase } from 'react-select';
import { TAsyncSelectHook, TAsyncSelectHookProps } from '../../../interfaces/componentInterfaces';

const defaultObj = { label: 'None', value: null };

const useCustomAsyncSelect = ({ value, asyncRequest }: TAsyncSelectHookProps): TAsyncSelectHook => {
  const autoCompleteRequest = async (inputValue: string) => {
    try {
      const { data: { autocomplete: options } } = await asyncRequest({ q: inputValue });
      return [defaultObj, ...options];
    } catch (e) {
      return e;
    }
  };
  const loadOptions = async (
    inputValue: string,
    callback: (options: OptionsType<OptionTypeBase>) => void,
  ) => {
    await callback(await autoCompleteRequest(inputValue));
  };
  return {
    loadOptions,
  };
};

export default useCustomAsyncSelect;
