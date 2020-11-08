import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import { SelectProps } from '../../../interfaces/formInterfaces';
import useCustomSelect from './useCustomSelect';
import './style.sass';

export const CustomSelect: React.FC<SelectProps> = ({
  id, label, error, selectValues, selectProps,
}: SelectProps) => {
  const { t } = useCustomSelect();
  return (
    <div className="select__wrapper">
      <FormControl>
        <InputLabel shrink htmlFor={id}>
          {t(label)}
        </InputLabel>
        <NativeSelect
          {...selectProps}
        >
          {selectValues.map(({ label: optionLabel, value: optionValue }) => (
            <option key={optionValue} value={optionValue}>{t(optionLabel)}</option>
          ))}
        </NativeSelect>
        {error && <span className="select__error">{t(error)}</span>}
      </FormControl>
    </div>
  );
};
