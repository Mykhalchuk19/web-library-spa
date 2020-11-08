import React, {
  useRef, useState, useEffect, MutableRefObject,
} from 'react';
import { useTranslation } from 'react-i18next';
import { OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import { InputProps } from '../../../interfaces/formInterfaces';
import './style.sass';

export const CustomInput: React.FC<InputProps> = ({
  label, id, error, readOnly, inputProps,
}: InputProps) => {
  const { t } = useTranslation(['common']);
  const [width, setWidth] = useState(0);
  const labelRef = useRef() as MutableRefObject<HTMLLabelElement>;
  useEffect(() => setWidth(labelRef.current.offsetWidth), [labelRef]);
  return (
    <div className="input__wrapper">
      <FormControl fullWidth variant="outlined">
        <InputLabel
          htmlFor={id}
          ref={labelRef}
        >
          {t(label)}
        </InputLabel>
        <OutlinedInput
          type="text"
          id={id}
          {...inputProps}
          labelWidth={width}
          disabled={!!readOnly}
        />
        {error && <span className="input__error">{t(error)}</span>}
      </FormControl>
    </div>
  );
};
