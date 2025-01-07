import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import hi from '../Assests/translations/hi.json';
import en from '../Assests/translations/en.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'hi',
    lng: 'hi', 
    resources: {
        en: { translation: en },
        hi: { translation: hi },
    },
    interpolation: { escapeValue: false },
});

export default i18n;
