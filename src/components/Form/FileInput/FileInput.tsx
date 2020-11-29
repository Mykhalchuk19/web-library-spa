import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputProps } from '../../../interfaces/formInterfaces';
import './style.sass';

export const FileInput:React.FC<InputProps> = ({
  id, label, error, inputProps,
}: InputProps) => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="file-input__wrapper">
        <label className="file-input__label" htmlFor={id}>
          {t(label)}
        </label>
        <input className="file-input" {...inputProps} id={id} />
        {error && <span className="file-input__error">{error}</span>}
      </div>
    </>
  );
};
