import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es' | 'ja';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'home': 'Home',
    'tools': 'Tools',
    'resources': 'Resources',
    'about': 'About',
    'manifesto': 'Manifesto',
    'services': 'Our Services',
    'forTraders': 'For Traders',
    'forDevelopers': 'For Developers',
    'defiFundamentals': 'DeFi Fundamentals',
    'securityGuide': 'Security Guide',
    'walletGuide': 'Wallet Guide',
    'forEveryone': 'For Everyone',
    'privacyPolicy': 'Privacy Policy',
    'termsOfService': 'Terms of Service',
    'cookiePolicy': 'Cookie Policy',
    'copyright': '© {year} Open Crypto Foundation. All rights reserved.',
    // Add more translations as needed
  },
  es: {
    'home': 'Inicio',
    'tools': 'Herramientas',
    'resources': 'Recursos',
    'about': 'Acerca de',
    'manifesto': 'Manifiesto',
    'services': 'Nuestros Servicios',
    'forTraders': 'Para Traders',
    'forDevelopers': 'Para Desarrolladores',
    'defiFundamentals': 'Fundamentos DeFi',
    'securityGuide': 'Guía de Seguridad',
    'walletGuide': 'Guía de Billeteras',
    'forEveryone': 'Para Todos',
    'privacyPolicy': 'Política de Privacidad',
    'termsOfService': 'Términos de Servicio',
    'cookiePolicy': 'Política de Cookies',
    'copyright': '© {year} Open Crypto Foundation. Todos los derechos reservados.',
    // Add more translations as needed
  },
  ja: {
    'home': 'ホーム',
    'tools': 'ツール',
    'resources': 'リソース',
    'about': '会社概要',
    'manifesto': '声明',
    'services': '私たちのサービス',
    'forTraders': 'トレーダー向け',
    'forDevelopers': '開発者向け',
    'defiFundamentals': 'DeFi基礎',
    'securityGuide': 'セキュリティガイド',
    'walletGuide': 'ウォレットガイド',
    'forEveryone': '一般向け',
    'privacyPolicy': 'プライバシーポリシー',
    'termsOfService': '利用規約',
    'cookiePolicy': 'クッキーポリシー',
    'copyright': '© {year} Open Crypto Foundation. 無断複写・転載を禁じます。',
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'ja'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // If no saved preference, try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (['es', 'ja'].includes(browserLang)) {
        setLanguage(browserLang as Language);
        localStorage.setItem('language', browserLang);
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    const translation = currentTranslations[key as keyof typeof currentTranslations];
    
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      // Fallback to English if translation is missing
      return translations.en[key as keyof typeof translations.en] || key;
    }
    
    // Replace variables in translation strings
    if (typeof translation === 'string' && translation.includes('{year}')) {
      return translation.replace('{year}', new Date().getFullYear().toString());
    }
    
    return translation;
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 