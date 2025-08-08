'use client';

import { Icon } from '@iconify/react';

type Locale = 'en' | 'th' | 'ja';

interface LanguageSwitcherProps {
    currentLocale: Locale;
    onLocaleChange: (locale: Locale) => void;
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
    const languages = [
        { code: 'en' as const, name: 'English', flag: '🇺🇸' },
        { code: 'th' as const, name: 'ไทย', flag: '🇹🇭' },
        { code: 'ja' as const, name: '日本語', flag: '🇯🇵' },
    ];

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <Icon icon="material-symbols:translate" className="text-xl" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {languages.map((lang) => (
                    <li key={lang.code}>
                        <button
                            onClick={() => onLocaleChange(lang.code)}
                            className={`flex items-center gap-2 ${
                                currentLocale === lang.code ? 'active' : ''
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                            {currentLocale === lang.code && (
                                <Icon icon="material-symbols:check" className="text-success ml-auto" />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}