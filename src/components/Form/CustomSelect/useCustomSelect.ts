import { useTranslation } from 'react-i18next';
import { UseCustomSelect } from '../../../interfaces/formInterfaces';

const useCustomSelect = (): UseCustomSelect => {
  const { t } = useTranslation('common');
  return {
    t,
  };
};

export default useCustomSelect;
