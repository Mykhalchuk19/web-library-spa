import React, {
  useRef, useState, useEffect, MutableRefObject,
} from 'react';
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

const CustomInput: React.FC<IProps> = ({
  label, id, error, inputProps,
}: IProps) => {
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
          {label}
        </InputLabel>
        <OutlinedInput
          type="text"
          id={id}
          {...inputProps}
          labelWidth={width}
        />
        {error && <span className="input__error">{error}</span>}
      </FormControl>
    </div>
  );
};

export default CustomInput;
