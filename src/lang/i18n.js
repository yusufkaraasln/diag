import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './resources/tr';
import en from './resources/en';
import { NativeModules } from 'react-native';

// default => browser language
const deviceLanguage =
Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13 ve öncesi
  : NativeModules.I18nManager.localeIdentifier;; // Android

const split = deviceLanguage.split('_');
const language = split[0];

const currentLang = language == 'tr' ? 'tr' : 'en';

const resources = {
  en: {
    translation: {
      ...en
    }
  },
  tr: {
    translation: {
      ...tr
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: currentLang,

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
