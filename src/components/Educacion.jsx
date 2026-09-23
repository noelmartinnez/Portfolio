import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { HCol } from "./fx/HorizontalSection";
import FCard from "./fx/FCard";

// Columnas de educación dentro de la pista horizontal de Formación.
const Educacion = () => {
  const { data } = useLanguage();

  return data.educacion.map((edu, index) => (
    <HCol key={edu.id}>
      <FCard
        index={index}
        size="is-lg is-high"
        art={edu.image && <img src={edu.image} alt="" className="fcard-logo" draggable={false} />}
        sub={edu.details}
        big={edu.degree}
        caption={edu.institution}
        captionEnd={edu.date}
      />
    </HCol>
  ));
};

export default Educacion;
