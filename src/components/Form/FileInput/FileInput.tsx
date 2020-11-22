import React from 'react';
import { InputProps } from '../../../interfaces/formInterfaces';
import './style.sass';

export const FileInput:React.FC<InputProps> = ({
  id, label, error, inputProps,
}: InputProps) => (
  <>
    <div className="file-input__wrapper">
      <label className="file-input__label" htmlFor={id}>
        {label}
      </label>
      <input className="file-input" {...inputProps} id={id} />
      {error && <span className="file-input__error">{error}</span>}
    </div>
  </>
);
