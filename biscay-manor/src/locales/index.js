import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { fr } from './fr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      fr: fr
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    ns: ['translations'],
    defaultNS: 'translations'
  });

export default i18n;