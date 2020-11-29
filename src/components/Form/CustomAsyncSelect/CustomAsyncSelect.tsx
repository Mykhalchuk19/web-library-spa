import React from 'react';
import AsyncReactSelect from 'react-select/async';
import useCustomAsyncSelect from './useCustomAsyncSelect';
import { TAsyncSelect } from '../../../interfaces/componentInterfaces';
import './style.sass';

export const CustomAsyncSelect: React.FC<TAsyncSelect> = ({
  className,
  value,
  id,
  asyncRequest,
  onChange,
  label,
  isMulti,
  isClearable,
  defaultValue: defaultValueFromProps,
}: TAsyncSelect) => {
  const {
    loadOptions,
    defaultValue,
    defaultOptions,
  } = useCustomAsyncSelect({ value, asyncRequest, defaultValueFromProps });
  return (
    <div>
      <label className="async-select__label" htmlFor={id}>{label}</label>
      <AsyncReactSelect
        id={id}
        loadOptions={loadOptions}
        onChange={onChange}
        className={`${className} async-select`}
        value={isMulti ? defaultValueFromProps : defaultValue}
        isMulti={isMulti}
        isClearable={isClearable}
        defaultOptions={defaultOptions}
        defaultValue={defaultValueFromProps}
      />
    </div>
  );
};
