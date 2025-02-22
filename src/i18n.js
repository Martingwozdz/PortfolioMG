import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    lng: "en", // idioma por defecto
    fallbackLng: "en", // idioma de reserva
    interpolation: {
      escapeValue: false // react ya hace el escape
    }
  });

export default i18n;
