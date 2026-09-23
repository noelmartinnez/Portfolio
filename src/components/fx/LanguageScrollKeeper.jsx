import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "../../utils/gsap";
import { useLanguage } from "../../context/LanguageContext";

// Cambiar de idioma cambia anchos y alturas (pistas horizontales, paneles), así
// que el scrollY anterior deja de apuntar al mismo sitio. Antes del cambio se
// anota un ancla (sección anclada + progreso, o sección + desplazamiento) y,
// tras el nuevo render, se recalcula ScrollTrigger y se vuelve a esa ancla.
const captureAnchor = () => {
  const pinned = ScrollTrigger.getAll().find((st) => st.pin && st.isActive);
  if (pinned) return { trigger: pinned.trigger, progress: pinned.progress };

  const line = window.innerHeight * 0.5;
  let el = null;
  document.querySelectorAll("[data-bg]").forEach((section) => {
    if (section.getBoundingClientRect().top <= line) el = section;
  });
  return el ? { el, offset: -el.getBoundingClientRect().top } : null;
};

const restoreAnchor = (anchor) => {
  let top = null;

  if (anchor.trigger) {
    const st = ScrollTrigger.getAll().find((s) => s.pin && s.trigger === anchor.trigger);
    if (st) top = st.start + anchor.progress * (st.end - st.start);
  } else if (anchor.el?.isConnected) {
    top = anchor.el.getBoundingClientRect().top + window.scrollY + anchor.offset;
  }

  if (top != null) window.scrollTo({ top, behavior: "instant" });
};

const LanguageScrollKeeper = () => {
  const { lang } = useLanguage();
  const anchorRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const handleBeforeChange = () => {
      anchorRef.current = captureAnchor();
    };
    window.addEventListener("portfolio:before-lang-change", handleBeforeChange);
    return () => window.removeEventListener("portfolio:before-lang-change", handleBeforeChange);
  }, []);

  // Se ejecuta tras el commit y antes de pintar: sin salto visible.
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    ScrollTrigger.refresh();
    if (anchorRef.current) restoreAnchor(anchorRef.current);
    anchorRef.current = null;
    ScrollTrigger.update();
  }, [lang]);

  return null;
};

export default LanguageScrollKeeper;
