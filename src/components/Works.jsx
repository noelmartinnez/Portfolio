import React from "react";
import { useLanguage } from "../context/LanguageContext";
import HorizontalSection, { HCol, HorizontalHead } from "./fx/HorizontalSection";
import FCard, { LinkArrow } from "./fx/FCard";
import ProjectArt from "./fx/ProjectArt";

// Ritmo escalonado de la pista: anchas, altas y bajas alternadas.
const SIZES = ["", "is-lg is-low", "is-high", "is-low", "is-lg", "is-high"];

const Works = () => {
  const { t, data } = useLanguage();

  return (
    <HorizontalSection
      id="proyects"
      bg="#050816"
      head={
        <HorizontalHead
          eyebrow={t("works.subtitle")}
          title={t("works.title")}
          text={t("works.p1")}
          hint={t("fx.dragHint")}
        />
      }
      compactHead={
        <HorizontalHead
          eyebrow={t("works.subtitle")}
          title={t("works.title")}
          text={t("works.p1")}
          hint={t("fx.swipeHint")}
        />
      }
    >
      {data.projects.map((project, index) => (
        <HCol key={project.id}>
          <FCard
            index={index}
            size={SIZES[index % SIZES.length]}
            href={project.source_code_link}
            sub={project.tags.map((tag) => `#${tag.name}`).join(" · ")}
            big={project.name}
            art={<ProjectArt id={project.id} />}
            reveal={<p>{project.description}</p>}
            caption={<>{t("works.viewOnGithub")}<LinkArrow /></>}
            captionEnd={project.tags[0]?.name}
          />
        </HCol>
      ))}
    </HorizontalSection>
  );
};

export default Works;
