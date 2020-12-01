import React from 'react';
import './style.sass';
import { useTranslation } from 'react-i18next';
import useAvatar from './useAvatar';
import { TAvatar } from '../../interfaces/componentInterfaces';

const Avatar:React.FC<TAvatar> = ({
  src, disabled = true, text, className = '', inputProps = {},
}:TAvatar) => {
  const { t } = useTranslation('common');
  const { getPseudoRandomColor } = useAvatar();
  return (
    <div className={`avatar__wrapper ${className}`} style={src ? {} : { backgroundColor: getPseudoRandomColor }}>
      <div className="avatar__image--wrapper">
        { src ? (<img className="avatar__image--photo" src={src} alt="" />)
          : (
            <span className="avatar__image--pseudo">
              {text || t('Image')}
            </span>
          ) }
      </div>
      <input
        disabled={disabled}
        type="file"
        className="avatar__upload--input"
        title=""
        {...inputProps}
      />
      {!disabled && (
      <div className="avatar__label">
        <span className="avatar__label--text">{t('Upload')}</span>
      </div>
      )}
    </div>
  );
};

export default Avatar;
