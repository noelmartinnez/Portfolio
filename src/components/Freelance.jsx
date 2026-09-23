import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useMediaQuery } from "../hooks/useResponsive";
import { DESKTOP_MOTION } from "../utils/gsap";
import HorizontalSection, { HCol, HorizontalHead } from "./fx/HorizontalSection";
import FCard from "./fx/FCard";

const Freelance = () => {
  const { t, data } = useLanguage();
  // En táctil la tarjeta va limpia: la captura, y debajo el nombre y el enlace.
  const isPinned = useMediaQuery(DESKTOP_MOTION);

  const head = (hint) => (
    <HorizontalHead
      eyebrow={t("freelance.subtitle")}
      title={t("freelance.title")}
      text={t("freelance.paragraph")}
      hint={hint}
    />
  );

  return (
    <HorizontalSection
      id="freelance"
      bg="#050816"
      head={head(t("fx.dragHint"))}
      compactHead={head(t("fx.swipeHint"))}
    >
      {data.freelance.map((item, index) => (
        <HCol key={item.id}>
          <FCard
            index={index + 1}
            size={index % 2 ? "is-low" : "is-high"}
            shot
            plain={!isPinned}
            href={item.live_link}
            linkEnd
            image={item.image}
            imageAlt={item.name}
            sub={isPinned ? item.client : undefined}
            big={item.name}
            reveal={isPinned ? <p>{item.description}</p> : undefined}
            caption={isPinned ? item.client : item.name}
            captionEnd={`${t("freelance.viewSite")} ↗`}
          />
        </HCol>
      ))}
    </HorizontalSection>
  );
};

export default Freelance;
