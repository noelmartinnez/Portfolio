import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { translations } from "../i18n/translations";
import { dataTranslations } from "../i18n/data";
import {
  experiencesBase,
  projectsBase,
  certificadosBase,
  idiomasBase,
  educacionBase,
  skillsBase,
  demosBase,
} from "../constants";

const DEFAULT_LANG = "es";
const SUPPORTED = ["es", "en"];

const LanguageContext = createContext(null);

const resolveKey = (obj, key) =>
  key.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), obj);

const zipData = (base, translated) =>
  base.map((item) => ({ ...item, ...(translated?.[item.id] ?? {}) }));

const getInitialLang = () => {
  try {
    const stored = localStorage.getItem("lang");
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch (e) {
    /* ignore */
  }
  return DEFAULT_LANG;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  const setLanguage = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch (e) {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(
    () => setLanguage(lang === "es" ? "en" : "es"),
    [lang, setLanguage]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => {
      const value = resolveKey(translations[lang], key);
      if (value !== undefined) return value;
      const fallback = resolveKey(translations.en, key);
      return fallback !== undefined ? fallback : key;
    },
    [lang]
  );

  const data = useMemo(() => {
    const d = dataTranslations[lang] ?? dataTranslations.en;
    return {
      experiences: zipData(experiencesBase, d.experiences),
      projects: zipData(projectsBase, d.projects),
      certificados: zipData(certificadosBase, d.certificados),
      idiomas: zipData(idiomasBase, d.idiomas),
      educacion: zipData(educacionBase, d.educacion),
      skills: zipData(skillsBase, d.skills),
      demos: zipData(demosBase, d.demos),
    };
  }, [lang]);

  const cvUrl = t("meta.cvUrl");

  const value = useMemo(
    () => ({ lang, setLanguage, toggleLang, t, data, cvUrl }),
    [lang, setLanguage, toggleLang, t, data, cvUrl]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
