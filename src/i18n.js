import { createI18n } from 'vue-i18n';
import { locales } from './locales';

const i18n = createI18n({
  locale: 'en', // Idioma padrão
  messages: locales,
});

export default i18n;