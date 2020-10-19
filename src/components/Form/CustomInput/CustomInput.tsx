import React, {
  useRef, useState, useEffect, MutableRefObject,
} from 'react';
import { useTranslation } from 'react-i18next';
import { OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import './style.sass';

interface IObject {
    [prop: string]: any;
}

interface IProps {
    label: string;
    id: string;
    error: string;
    inputProps: IObject;
}

export const CustomInput: React.FC<IProps> = ({
  label, id, error, inputProps,
}: IProps) => {
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
        />
        {error && <span className="input__error">{t(error)}</span>}
      </FormControl>
    </div>
  );
};
