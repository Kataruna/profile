import { useState, useEffect } from 'react';
import en from '../locale/en.json';
import th from '../locale/th.json';
import ja from '../locale/ja.json';

type Locale = 'en' | 'th' | 'ja';

const messages = { en, th, ja };

// Font configurations for each language (like Unity's font assets for different languages)
const fontConfigs = {
    en: 'font-outfit', // English uses Outfit
    th: 'font-ibm', // Thai uses Sarabun (better for Thai characters)
    ja: 'font-mplus' // Japanese uses Noto Sans JP (better for Japanese characters)
};

// Enhanced device language detection (like Unity's Application.systemLanguage)
const detectDeviceLanguage = (): Locale => {
    // Check if we're in browser environment
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return 'en';
    }

    // Get browser languages in order of preference
    const browserLanguages = navigator.languages || [navigator.language];

    for (const lang of browserLanguages) {
        if (!lang) continue;

        const languageCode = lang.split('-')[0].toLowerCase();
        const fullLang = lang.toLowerCase();

        // Map different language codes to our supported locales
        if (languageCode === 'th' || fullLang.includes('thai')) {
            return 'th';
        }

        if (languageCode === 'ja' || languageCode === 'jp' || fullLang.includes('japanese')) {
            return 'ja';
        }

        // For English and other languages default to English
        if (languageCode === 'en') {
            return 'en';
        }
    }

    return 'en'; // Ultimate fallback
};

// This is like Unity's Localization.GetStringAsync() but simpler
export function useTranslation() {
    const [locale, setLocale] = useState<Locale>('en');

    // Load saved language from localStorage or detect from device
    useEffect(() => {
        // Check if we're in the browser (not SSR)
        if (typeof window !== 'undefined') {
            const savedLocale = localStorage.getItem('locale') as Locale;
            if (savedLocale && ['en', 'th', 'ja'].includes(savedLocale)) {
                setLocale(savedLocale);
            } else {
                // Auto-detect device language (enhanced detection)
                const detectedLocale = detectDeviceLanguage();
                setLocale(detectedLocale);
                // Save the detected language
                localStorage.setItem('locale', detectedLocale);
            }
        }
    }, []);

    // Save language choice (like Unity's PlayerPrefs.SetString())
    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', newLocale);
        }
    };

    // Get translation function (like Unity's Localization.GetString())
    const t = (key: string, params?: Record<string, string>) => {
        const keys = key.split('.');
        let value: unknown = messages[locale];

        // Navigate through the JSON structure (like getting nested data in Unity)
        for (const k of keys) {
            value = (value as Record<string, unknown>)?.[k];
        }

        if (typeof value !== 'string') {
            return key; // Fallback to key if translation not found
        }

        // Replace parameters {name} with actual values (like Unity's string formatting)
        if (params) {
            return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
                return params[paramKey] || match;
            });
        }

        return value;
    };

    // Get font class for current language (like Unity's font switching)
    const getFontClass = () => fontConfigs[locale];

    return { locale, changeLocale, t, getFontClass };
}