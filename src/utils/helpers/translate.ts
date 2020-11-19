import i18n from '../i18next/config';

export const t = (key: string, param: string) => i18n.getFixedT(null, `${param}`)(key, param);
