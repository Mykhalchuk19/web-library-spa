import { useMemo } from 'react';
import { COLORS } from '../../constants';
import { TUseAvatar } from '../../interfaces/componentInterfaces';

const useAvatar = (): TUseAvatar => {
  const getPseudoRandomColor = useMemo(() => COLORS[Math.floor(Math.random() * COLORS.length)], []);
  return {
    getPseudoRandomColor,
  };
};

export default useAvatar;
