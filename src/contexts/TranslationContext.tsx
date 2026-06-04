'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locale/en.json';
import th from '../locale/th.json';
import ja from '../locale/ja.json';
import kr from '../locale/kr.json';

type Locale = 'en' | 'th' | 'ja' | 'kr';

const messages = { en, th, ja, kr };

// Font configurations for each language
const fontConfigs = {
    en: 'font-outfit',
    th: 'font-ibm',
    ja: 'font-mplus',
    kr: 'font-jua',
};

// Enhanced device language detection
const detectDeviceLanguage = (): Locale => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return 'en';
    }

    const browserLanguages = navigator.languages || [navigator.language];

    for (const lang of browserLanguages) {
        if (!lang) continue;

        const languageCode = lang.split('-')[0].toLowerCase();
        const fullLang = lang.toLowerCase();

        if (languageCode === 'th' || fullLang.includes('thai')) {
            return 'th';
        }

        if (languageCode === 'ja' || languageCode === 'jp' || fullLang.includes('japanese')) {
            return 'ja';
        }

        if (languageCode === 'ko' || languageCode === 'kr' || fullLang.includes('korean')) {
            return 'kr';
        }

        if (languageCode === 'en') {
            return 'en';
        }
    }

    return 'en';
};

interface TranslationContextType {
    locale: Locale;
    changeLocale: (newLocale: Locale) => void;
    t: (key: string, params?: Record<string, string>) => string;
    getFontClass: () => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLocale = localStorage.getItem('locale') as Locale;
            if (savedLocale && ['en', 'th', 'ja', 'kr'].includes(savedLocale)) {
                setLocale(savedLocale);
            } else {
                const detectedLocale = detectDeviceLanguage();
                setLocale(detectedLocale);
                localStorage.setItem('locale', detectedLocale);
            }
        }
    }, []);

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', newLocale);
        }
    };

    const t = (key: string, params?: Record<string, string>) => {
        const keys = key.split('.');
        let value: unknown = messages[locale];

        for (const k of keys) {
            value = (value as Record<string, unknown>)?.[k];
        }

        if (typeof value !== 'string') {
            return key;
        }

        if (params) {
            return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
                return params[paramKey] || match;
            });
        }

        return value;
    };

    const getFontClass = () => fontConfigs[locale];

    return (
        <TranslationContext.Provider value={{ locale, changeLocale, t, getFontClass }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}
