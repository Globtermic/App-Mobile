import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en'
import fr from './translations/fr'
import es from './translations/es'
import * as Localisation from 'expo-localization'

const LANGUAGES = {
    en,
    fr,
    es
}

var currentLang = Localisation.getLocales()[0].languageCode;

if (currentLang !== 'en' || currentLang !== 'fr' || currentLang !== 'es') {
  currentLang = 'en';
}

  i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  });
  i18next.changeLanguage(currentLang);