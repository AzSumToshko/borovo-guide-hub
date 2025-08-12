import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "bg" | "en";

type Dict = Record<string, string>;

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const bg: Dict = {
  "site.name": "Община Борово",
  "nav.about": "За нас",
  "nav.admin": "Административно обслужване",
  "nav.services": "Дейности и услуги",
  "nav.news": "Актуално",
  "nav.registers": "Публични регистри",
  "nav.buyer": "Профил на купувача",
  "nav.declarations": "Декларации по ЗПКОНПИ",
  "nav.access": "Достъп до информация",
  "nav.contacts": "Контакти",
  "nav.council": "Общински съвет",
  "search.placeholder": "Търсене в сайта...",
  "breadcrumbs.home": "Начало",
  "footer.accessibility": "Декларация за достъпност",
  "footer.sitemap": "Карта на сайта",
};

const en: Dict = {
  "site.name": "Municipality of Borovo",
  "nav.about": "About us",
  "nav.admin": "Administrative services",
  "nav.services": "Services",
  "nav.news": "News",
  "nav.registers": "Public registers",
  "nav.buyer": "Buyer profile",
  "nav.declarations": "Declarations (ZPKONPI)",
  "nav.access": "Access to information",
  "nav.contacts": "Contacts",
  "nav.council": "Municipal council",
  "search.placeholder": "Search the site...",
  "breadcrumbs.home": "Home",
  "footer.accessibility": "Accessibility statement",
  "footer.sitemap": "Sitemap",
};

const dictionaries: Record<Locale, Dict> = { bg, en };

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem("locale") as Locale) || "bg");

  useEffect(() => {
    localStorage.setItem("locale", locale);
    // Update <html lang="...">
    document.documentElement.lang = locale === "bg" ? "bg" : "en";
  }, [locale]);

  const t = useMemo(() => {
    const dict = dictionaries[locale] || dictionaries.bg;
    return (key: string) => dict[key] ?? key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
