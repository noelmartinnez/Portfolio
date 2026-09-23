import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { HCol } from "./fx/HorizontalSection";
import FCard from "./fx/FCard";

const SIZES = ["is-low", "is-high", "is-low"];

// Columnas de certificados dentro de la pista horizontal de Formación.
const Certificados = ({ plain = false }) => {
  const { t, data } = useLanguage();

  return data.certificados.map((certificado, index) => (
    <HCol key={certificado.id}>
      <FCard
        index={index + 2}
        size={SIZES[index % SIZES.length]}
        shot
        plain={plain}
        href={certificado.source_code_link}
        linkEnd={plain}
        image={certificado.image}
        imageAlt={certificado.name}
        big={certificado.name}
        reveal={plain ? undefined : <p>{certificado.description}</p>}
        caption={plain ? certificado.name : `${t("languages.credential")} ↗`}
        captionEnd={plain ? `${t("languages.credential")} ↗` : undefined}
      />
    </HCol>
  ));
};

export default Certificados;
