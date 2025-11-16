"use client";

import Link from "next/link";
import { useTranslations } from "@/app/i18n-provider";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ locale, setLocale }) {
  const { t } = useTranslations();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  const toggleLocale = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        
        {/* Navegación centrada */}
        <nav className="flex items-center gap-6">
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/projects">{t("projects")}</Link>
          <Link href="/contact">{t("contact")}</Link>
        </nav>

        {/* Controles a la derecha */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {locale.toUpperCase()}
          </button>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
}
