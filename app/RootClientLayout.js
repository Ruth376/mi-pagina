"use client";

import { useState, useEffect } from "react";
import I18nProvider from "./i18n-provider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Traducciones
import commonES from "../locales/es/common.json";
import commonEN from "../locales/en/common.json";

import aboutES from "../locales/es/about.json";
import aboutEN from "../locales/en/about.json";

import projectsES from "../locales/es/projects.json";
import projectsEN from "../locales/en/projects.json";

import contactES from "../locales/es/contact.json";
import contactEN from "../locales/en/contact.json";

export default function RootClientLayout({ children }) {
  const [locale, setLocale] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved) setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const messages = {
    common: locale === "es" ? commonES : commonEN,
    about: locale === "es" ? aboutES : aboutEN,
    projects: locale === "es" ? projectsES : projectsEN,
    contact: locale === "es" ? contactES : contactEN,
  };

  return (
    <I18nProvider locale={locale} messages={messages}>
      <Navbar locale={locale} setLocale={setLocale} />
      <main>{children}</main>
      <Footer />
    </I18nProvider>
  );
}
