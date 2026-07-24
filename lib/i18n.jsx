'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: (x) => x });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  // Hydrate from localStorage / browser once on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('wpp-lang');
      if (saved === 'en' || saved === 'id') {
        setLangState(saved);
      } else if (navigator.language?.toLowerCase().startsWith('id')) {
        setLangState('id');
      }
    } catch {
      /* no-op */
    }
  }, []);

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      window.localStorage.setItem('wpp-lang', l);
      document.documentElement.lang = l;
    } catch {
      /* no-op */
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/**
 * Pick a localized value from a { en, id } object, or return the raw value.
 */
export function pick(node, lang) {
  if (node && typeof node === 'object' && ('en' in node || 'id' in node)) {
    return node[lang] ?? node.en;
  }
  return node;
}
