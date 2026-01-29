import { createContext, useState, useContext, useEffect } from 'react';
import translations from '../i18n/translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('site_language');
        return savedLanguage || 'pt'; // Default to PT
    });

    useEffect(() => {
        localStorage.setItem('site_language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };

    // Helper to access nested keys like 'header.about'
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    // Pass the raw dictionary slice for sections that need iteration or cleaner destructuring
    const useDictionary = (section) => {
        return translations[language][section] || {};
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, useDictionary }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
