import i18n from 'i18n-js';
i18n.fallbacks = true;

export default class LanguageService {}

i18n.translations = {
    en: { txtStartScreen1: 'Welcome,', txtStartScreen2: 'please scan your QR-Code!', 
    txtWelcomeScreen1: 'Welcome', txtWelcomeScreen2: 'Are you ready to ExploRe', txtWelcomeScreen3: 'your residence and your region?'},
    
    de: { txtStartScreen1: 'Willkommen,', txtStartScreen2: 'bitte scanne deinen QR-Code!',
    txtWelcomeScreen1: 'Willkommen', txtWelcomeScreen2: 'Bist du bereit mit ExploRe', txtWelcomeScreen3: 'deine Residenz und deine Region zu erkunden?'},
  };

i18n.locale = 'en';

