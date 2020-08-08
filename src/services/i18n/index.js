import i18n from 'i18next';

import ru from './languages/ru';
import ua from './languages/ua';
import en from './languages/en';

i18n.init({
  resources: {
    en,
    ua,
    ru
  },

  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,

  interpolation: {
    escapeValue: false
  }
});

window.t = text => i18n.t(text);
window.changeLanguage = lang => i18n.changeLanguage(lang);
