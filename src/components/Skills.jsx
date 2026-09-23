import React, { lazy, Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import { useMediaQuery } from "../hooks/useResponsive";
import { gsap, useGSAP, DESKTOP_MOTION } from "../utils/gsap";
import SplitHeading from "./fx/SplitHeading";
import { useCarousel, CarouselDots } from "./fx/Carousel";
import SkillArt from "./fx/SkillArt";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const SkillPills = ({ skills }) => (
  <div className="flex flex-wrap gap-2.5 max-[500px]:justify-center">
    {skills.map((skill, i) => (
      <motion.span
        key={skill}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 * i, duration: 0.35 }}
        className="bg-black-100 text-secondary border border-white/15 rounded-lg px-3 py-1.5 text-[13px] font-medium"
      >
        {skill}
      </motion.span>
    ))}
  </div>
);

// Pausa (en unidades de tarjeta) al entrar y al salir del tramo anclado.
const HOLD = 0.35;

// Escritorio: coverflow 3D anclado. Cada categoría es una tarjeta de cristal;
// el scroll gira el carrusel y la tarjeta de frente muestra sus skills.
const SkillsCoverflow = ({ groups }) => {
  const pinRef = useRef(null);
  const timelineRef = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const count = groups.length;

  // Giro continuo ligado al scroll (con inercia de scrub) y, al soltar, un
  // snap suave a la tarjeta siguiente en la dirección del scroll.
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".cf-card", pinRef.current);
      const state = { pos: 0 };

      // Coloca cada tarjeta según su distancia (continua) a la del centro.
      // Todas las curvas son suaves en 0 para que no haya tirón al cruzar.
      const layout = () => {
        cards.forEach((card, i) => {
          const offset = i - state.pos;
          const d = Math.abs(offset);
          const depth = (d * d) / (1 + d);
          const x = offset * (68 - 8 * Math.min(d, 2));
          const rotate = 38 * Math.tanh(1.3 * offset);
          card.style.transform =
            `translate(-50%, -50%) translate3d(${x}%, 0, ${-170 * depth}px) ` +
            `rotateY(${rotate}deg) scale(${1 - 0.07 * depth})`;
          card.style.setProperty("--dim", Math.min(0.7, 0.5 * depth).toFixed(3));
          card.style.opacity = d <= 2.2 ? 1 : Math.max(0, 1 - (d - 2.2) / 0.5);
          card.style.zIndex = 100 - Math.round(d * 10);
        });

        const current = Math.round(state.pos);
        if (current !== activeRef.current) {
          activeRef.current = current;
          setActive(current);
        }
      };
      layout();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          start: "center center",
          end: () => `+=${(count - 1 + 2 * HOLD) * window.innerHeight * 0.7}`,
          scrub: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: "labelsDirectional",
            delay: 0.12,
            duration: { min: 0.3, max: 0.8 },
            ease: "power3.out",
          },
        },
      });

      tl.to({}, { duration: HOLD })
        .to(state, { pos: count - 1, duration: count - 1, ease: "none", onUpdate: layout })
        .to({}, { duration: HOLD });
      for (let i = 0; i < count; i++) tl.addLabel(`s${i}`, HOLD + i);
      timelineRef.current = tl;

      return () => {
        timelineRef.current = null;
      };
    },
    { scope: pinRef, dependencies: [count], revertOnUpdate: true }
  );

  const goTo = (index) => {
    const tl = timelineRef.current;
    const st = tl?.scrollTrigger;
    if (!st) return;
    const progress = tl.labels[`s${index}`] / tl.duration();
    window.scrollTo({ top: st.start + progress * (st.end - st.start), behavior: "smooth" });
  };

  const current = groups[active] ?? groups[0];

  return (
    <div ref={pinRef} className="cf-pin">
      <p className="eyebrow justify-center">
        {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </p>
      <div className="cf-stage">
        {groups.map((group, index) => (
          <button
            key={group.id}
            type="button"
            className={`cf-card${index === active ? " is-active" : ""}`}
            onClick={() => goTo(index)}
            aria-current={index === active ? "true" : undefined}
          >
            <span className="cf-art">
              <SkillArt id={group.id} />
            </span>
            <span className="cf-name">{group.category}</span>
            <span className="cf-pills" aria-hidden={index !== active}>
              {group.skills.map((skill) => (
                <span key={skill} className="cf-pill">
                  {skill}
                </span>
              ))}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {current.category}: {current.skills.join(", ")}
      </p>
    </div>
  );
};

// Táctil: las categorías se recorren deslizando, con la del centro destacada,
// como eco del menú anclado del escritorio.
const SkillCarousel = ({ groups }) => {
  const trackRef = useRef(null);
  const carousel = useCarousel({ trackRef, itemSelector: ".sk-col", enabled: true, deps: [groups] });

  return (
    <div className="sk-carousel">
      <div ref={trackRef} className="sk-track">
        {groups.map((group, index) => (
          <div className="sk-col" key={group.id}>
            <article className={`sk-card${index === carousel.active ? " is-active" : ""}`}>
              <span className="p-kind">/{String(index + 1).padStart(2, "0")}</span>
              <h4 className="sk-title">{group.category}</h4>
              <SkillPills skills={group.skills} />
            </article>
          </div>
        ))}
      </div>
      <CarouselDots {...carousel} />
    </div>
  );
};

// Táctil: los mismos iconos, en 2D. Las bolas 3D cargan three.js y siete
// lienzos WebGL, demasiado para un móvil.
const TechRow = () => (
  <div className="tech-row">
    {technologies.map((technology, index) => (
      <motion.div
        key={technology.name}
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
        className="tech-chip"
      >
        <img src={technology.icon} alt="" width={48} height={48} loading="lazy" />
        <span>{technology.name}</span>
      </motion.div>
    ))}
  </div>
);

const Skills = () => {
  const { t, data } = useLanguage();
  const { ref: ballsRef, inView: ballsInView, seen: ballsSeen } = useInView("600px");
  const isPinned = useMediaQuery(DESKTOP_MOTION);

  return (
    <section id="skills" data-bg="#050816" className="relative">
      <div className={`${styles.padding} max-w-7xl mx-auto skills-intro`}>
        <p className={`${styles.sectionSubText} text-center select-none`}>{t("skills.subtitle")}</p>
        <SplitHeading
          text={t("skills.title")}
          className={`${styles.sectionHeadText} text-center select-none`}
        />

        {isPinned ? (
          <div ref={ballsRef} className="flex flex-row flex-wrap justify-center gap-10 mt-14">
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                {/* Los lienzos se crean al acercarse y luego solo se pausan. */}
                {ballsSeen && (
                  <Suspense fallback={null}>
                    <BallCanvas icon={technology.icon} active={ballsInView} />
                  </Suspense>
                )}
                <p className="flex items-center justify-center text-white text-[14px] font-bold select-none">
                  {technology.name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <TechRow />
        )}
      </div>

      {isPinned ? <SkillsCoverflow groups={data.skills} /> : <SkillCarousel groups={data.skills} />}
    </section>
  );
};

export default Skills;
