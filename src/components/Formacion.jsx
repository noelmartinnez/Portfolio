import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useMediaQuery } from "../hooks/useResponsive";
import { DESKTOP_MOTION } from "../utils/gsap";
import HorizontalSection, { HCol, HorizontalHead } from "./fx/HorizontalSection";
import Educacion from "./Educacion";
import Certificados from "./Certificados";
import Idiomas from "./Idiomas";
import SplitHeading from "./fx/SplitHeading";

// Educación y Certificados comparten una pista horizontal; Idiomas queda
// debajo como bloque vertical.
const Formacion = () => {
  const { t } = useLanguage();
  // En táctil los certificados tienen sección propia, fuera de la pista.
  const isPinned = useMediaQuery(DESKTOP_MOTION);

  const certHead = (hint) => (
    <HorizontalHead
      eyebrow={t("certificates.subtitle")}
      title={t("certificates.title")}
      hint={hint}
    />
  );

  const head = (hint) => (
    <HorizontalHead
      eyebrow={t("formacion.subtitle")}
      title={t("formacion.title")}
      text={t("fx.formacionText")}
      hint={hint}
    />
  );

  return (
    <>
      <HorizontalSection
        id="formacion"
        bg="#050816"
        head={head(t("fx.dragHint"))}
        compactHead={head(t("fx.swipeHint"))}
      >
        <Educacion />
        {isPinned && (
          <HCol className="h-divider">
            <p className="eyebrow">{t("certificates.subtitle")}</p>
            <SplitHeading text={t("certificates.title")} className="fx-h2 mt-4" />
          </HCol>
        )}
        {isPinned && <Certificados />}
      </HorizontalSection>

      {!isPinned && (
        <HorizontalSection
          id="certificados"
          bg="#050816"
          head={certHead(t("fx.swipeHint"))}
        >
          <Certificados plain />
        </HorizontalSection>
      )}

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto`}
      >
        <Idiomas />
      </motion.div>
    </>
  );
};

export default Formacion;
