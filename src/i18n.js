import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
    .use(LanguageDetector) // Detecta el idioma del navegador
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
        },
        fallbackLng: "en", // Si el idioma del navegador no está soportado, usa inglés
        interpolation: {
            escapeValue: false, // React ya maneja la seguridad contra XSS
        },
    });

export default i18n;