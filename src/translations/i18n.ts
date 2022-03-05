import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import translationEN from './en/app.json';

import translationPl from './pl/app.json';

// the translations
const resources = {
    en: {
      app: translationEN
    },
    pl: {
      app: translationPl
    }
  };

i18n
  .use(I18nextBrowserLanguageDetector) // passes i18n down to react-i18next
  .init({
    resources,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;