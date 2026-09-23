import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { useLanguage } from "../context/LanguageContext";
import { gsap, useGSAP, ScrollTrigger, DESKTOP_MOTION, COMPACT_MOTION, reveal } from "../utils/gsap";
import SplitHeading from "./fx/SplitHeading";

const ExperiencePanel = ({ index, experience }) => (
  <article className="story-panel">
    <div className="story-meta">
      <div
        className={`story-logo${experience.logoWordmark ? " is-wordmark" : ""}`}
        style={{ background: experience.iconBg }}
      >
        <img src={experience.icon} alt={experience.company_name} width={56} height={56} loading="lazy" />
      </div>
      <h3>{experience.title}</h3>
      <p className="story-company">{experience.company_name}</p>
      <p className="mono-line">{experience.date}</p>
    </div>

    {experience.points?.length > 0 && (
      <ul className="story-points">
        {experience.points.map((point, i) => (
          <li key={`exp-${index}-p-${i}`}>
            {typeof point === "string" ? (
              point
            ) : (
              <>
                <strong className="text-white">{point.label}:</strong> {point.text}
              </>
            )}
          </li>
        ))}
      </ul>
    )}
  </article>
);

// Patrón "story": en escritorio la sección se ancla y cada experiencia entra
// lateralmente sobre la anterior, con un raíl de progreso debajo.
const Experience = () => {
  const { t, data } = useLanguage();
  const sectionRef = useRef(null);
  const barRef = useRef(null);
  const timelineRef = useRef(null);
  const [active, setActive] = useState(0);
  const experiences = data.experiences;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const panels = Array.from(sectionRef.current.querySelectorAll(".story-panel"));

      mm.add(DESKTOP_MOTION, () => {
        gsap.set(panels.slice(1), { autoAlpha: 0, xPercent: 18 });

        let tl = null;
        tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: sectionRef.current,
            // Se ancla un envoltorio a ancho completo (no la <section>, para no
            // romper el DOM de React, ni .story-stage, que se centra con margin auto).
            pin: sectionRef.current.querySelector(".story-pin"),
            start: "top top",
            end: () => `+=${panels.length * window.innerHeight * 0.9}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            snap: { snapTo: "labels", duration: { min: 0.2, max: 0.6 }, ease: "power1.inOut" },
            onUpdate: (self) => {
              gsap.set(barRef.current, { scaleX: self.progress });
              if (!tl) return;
              // Progreso del scroll, no tl.time(): con scrub el timeline va con retraso.
              const time = self.progress * tl.duration();
              let current = 0;
              panels.forEach((_, i) => {
                if (time >= tl.labels[`p${i}`] - 0.5) current = i;
              });
              setActive(current);
            },
          },
        });

        tl.addLabel("p0").to({}, { duration: 0.6 });
        panels.forEach((panel, i) => {
          if (i === 0) return;
          tl.to(panels[i - 1], { autoAlpha: 0, xPercent: -18, duration: 1 })
            .to(panel, { autoAlpha: 1, xPercent: 0, duration: 1 }, "<0.15")
            .from(panel.querySelectorAll("li"), { autoAlpha: 0, x: 40, stagger: 0.08, duration: 0.6 }, "<0.3")
            .addLabel(`p${i}`)
            .to({}, { duration: 0.6 });
        });
        timelineRef.current = tl;

        reveal(
          panels[0].querySelectorAll(".story-meta > *, li"),
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.8, ease: "power3.out" },
          { trigger: sectionRef.current, start: "top 60%" }
        );

        return () => {
          timelineRef.current = null;
          setActive(0);
        };
      });

      // Táctil: cada panel se monta mientras sube por la pantalla y las
      // pastillas de arriba marcan en cuál estás.
      mm.add(COMPACT_MOTION, () => {
        panels.forEach((panel, i) => {
          reveal(
            panel,
            { y: 60, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out" },
            { trigger: panel, start: "top 85%" }
          );
          gsap.fromTo(
            panel.querySelectorAll(".story-meta > *, .story-points li"),
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.06,
              ease: "none",
              immediateRender: true,
              scrollTrigger: { trigger: panel, start: "top 85%", end: "top 45%", scrub: 0.4 },
            }
          );
          ScrollTrigger.create({
            trigger: panel,
            start: "top 60%",
            end: "bottom 60%",
            onToggle: (self) => self.isActive && setActive(i),
          });
        });
      });
    },
    // Solo depende del número de puestos: al cambiar de idioma se reutilizan los
    // mismos nodos y el pin no se rehace (rehacerlo descoloca toda la página).
    { scope: sectionRef, dependencies: [experiences.length], revertOnUpdate: true }
  );

  const goTo = (index) => {
    const tl = timelineRef.current;
    const st = tl?.scrollTrigger;
    if (!st) {
      sectionRef.current?.querySelectorAll(".story-panel")[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    const progress = tl.labels[`p${index}`] / tl.duration();
    window.scrollTo({ top: st.start + progress * (st.end - st.start), behavior: "smooth" });
  };

  return (
    <section id="experience" ref={sectionRef} data-bg="#050816" className="story">
      <div className="story-pin">
        <div className="story-stage">
          <div className="story-head">
            <p className={`${styles.sectionSubText} select-none`}>{t("experience.subtitle")}</p>
            <SplitHeading text={t("experience.title")} className="story-title select-none" />
          </div>

          <div className="story-chips">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                type="button"
                onClick={() => goTo(index)}
                className={index === active ? "is-active" : ""}
              >
                {String(index + 1).padStart(2, "0")} · {experience.company_name.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="story-panels">
            {experiences.map((experience, index) => (
              <ExperiencePanel key={experience.id} index={index} experience={experience} />
            ))}
          </div>

          <div className="story-rail">
            <div className="story-steps">
              {experiences.map((experience, index) => (
                <button
                  key={experience.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={index === active ? "is-active" : ""}
                >
                  {String(index + 1).padStart(2, "0")} · {experience.company_name.split(" ")[0]}
                </button>
              ))}
            </div>
            <div className="story-progress" aria-hidden="true">
              <i ref={barRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
