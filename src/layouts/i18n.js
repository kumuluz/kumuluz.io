import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import { reactI18nextModule } from 'react-i18next';

import enTranslations from '../../static/locales/en/translations.json'
import enBlog from '../../static/locales/en/blog.json'
import enOther from '../../static/locales/en/other.json'
import enPlatform from '../../static/locales/en/platform.json'
import enRoadmap from '../../static/locales/en/roadmap.json'

i18n
  .use(XHR)
  .use(Cache)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    load: 'languageOnly',
    preload: ['en'],
    fallbackLng: 'en',

    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded'
    }
  });

i18n.addResourceBundle('en', 'translations', enTranslations)
i18n.addResourceBundle('en', 'blog', enBlog)
i18n.addResourceBundle('en', 'other', enOther)
i18n.addResourceBundle('en', 'platform', enPlatform)
i18n.addResourceBundle('en', 'roadmap', enRoadmap)

export default i18n;
