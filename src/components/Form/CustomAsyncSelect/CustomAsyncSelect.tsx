import React from 'react';
import AsyncReactSelect from 'react-select/async';
import useCustomAsyncSelect from './useCustomAsyncSelect';
import { TAsyncSelect } from '../../../interfaces/componentInterfaces';

export const CustomAsyncSelect: React.FC<TAsyncSelect> = ({
  handleChange,
  className,
  value,
  id,
  asyncRequest,
  onChange,
}: TAsyncSelect) => {
  const { loadOptions } = useCustomAsyncSelect({ value, asyncRequest });
  return (
    <AsyncReactSelect
      id={id}
      loadOptions={loadOptions}
      onChange={onChange}
      className={className}
    />
  );
};
