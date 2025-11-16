"use client";

import { createContext, useContext } from "react";

const I18nContext = createContext(null);

export default function I18nProvider({ children, locale, messages }) {
  const t = (key, namespace = "common") => {
    if (!messages?.[namespace]) return key;

    const namespaceMessages = messages[namespace];

    // Soporte para claves anidadas con punto (solo para projects)
    const value = key.split('.').reduce((obj, k) => obj?.[k], namespaceMessages);

    return value ?? key; // Si no existe, retorna la clave original
  };

  const value = { locale, messages, t };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslations() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useTranslations must be used inside I18nProvider");
  return context;
}
