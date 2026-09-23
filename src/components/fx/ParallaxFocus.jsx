import React, { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, ANY_MOTION, COMPACT_MOTION, DESKTOP_MOTION, reveal } from "../../utils/gsap";
import { useLanguage } from "../../context/LanguageContext";
import SplitHeading from "./SplitHeading";

// Rutas "fantasma" que flotan a distinta velocidad alrededor del mensaje.
const GHOSTS = [
  { text: "spring-ai/ChatClient.java", left: "7%", top: "14%", speed: -60 },
  { text: "kafka/topics/entities.v1", left: "74%", top: "20%", speed: 40 },
  { text: "ner/model · f1=0.90", left: "10%", top: "74%", speed: 70 },
  { text: "k8s/deployment.yaml", left: "70%", top: "80%", speed: -40 },
  { text: "vllm/serve.yaml", left: "82%", top: "52%", speed: 90 },
  { text: "azure-ai-foundry/prompt.json", left: "4%", top: "44%", speed: -80 },
];

// Pausa (en viewports) al anclar: el mensaje se lee quieto antes de que las
// rutas empiecen a alejarse, como en las pistas horizontales.
const START_HOLD = 0.3;

const ParallaxFocus = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Escritorio: la sección se queda clavada un viewport y, mientras tanto,
      // las rutas se alejan del mensaje (cada una según su lado y velocidad).
      mm.add(DESKTOP_MOTION, () => {
        const tl = gsap.timeline({
          defaults: { ease: "none", duration: 1 },
          scrollTrigger: {
            trigger: ref.current,
            // Se ancla el hijo, no la <section>: GSAP envuelve lo anclado en un
            // pin-spacer y React no podría insertar Demos (lazy) justo delante.
            pin: ref.current.querySelector(".focus-stage"),
            start: "top top",
            end: `+=${(1 + START_HOLD) * 100}%`,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });
        tl.to({}, { duration: START_HOLD });

        ref.current.querySelectorAll(".ghost-file").forEach((el) => {
          const speed = Number(el.dataset.speed);
          const side = parseFloat(el.style.left) < 50 ? -1 : 1;
          tl.fromTo(
            el,
            { x: 0, y: 0, rotate: 0 },
            { x: side * Math.abs(speed) * 3.5, y: speed * 2, rotate: side * 6 },
            START_HOLD
          );
        });
        ref.current.querySelectorAll(".blob-wrap").forEach((el) => {
          tl.fromTo(el, { y: 0 }, { y: Number(el.dataset.speed) * 3 }, START_HOLD);
        });
        tl.fromTo(ref.current.querySelector(".focus-content"), { yPercent: 0 }, { yPercent: -10 }, START_HOLD);
      });

      // Tablet y móvil: parallax vertical sin anclar.
      mm.add(COMPACT_MOTION, () => {
        ref.current.querySelectorAll("[data-speed]").forEach((el) => {
          const speed = Number(el.dataset.speed);
          gsap.fromTo(
            el,
            { y: -speed * 2.5 },
            {
              y: speed * 2.5,
              ease: "none",
              scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });
      });

      mm.add(ANY_MOTION, () => {
        gsap.fromTo(
          ref.current.querySelectorAll(".blob"),
          { scale: 0.8 },
          {
            scale: 1.25,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
          }
        );

        // Deriva continua de cada mancha, con ritmos distintos para que no
        // se muevan a la vez (el parallax va en .blob-wrap y el scale arriba).
        // Solo corre mientras la sección está en pantalla.
        const drifts = [];
        ref.current.querySelectorAll(".blob").forEach((blob, i) => {
          const drift = [
            { x: 180, y: -120, rotate: 60, duration: 6 },
            { x: -190, y: 110, rotate: -55, duration: 7 },
          ][i % 2];
          drifts.push(
            gsap.to(blob, { ...drift, ease: "sine.inOut", repeat: -1, yoyo: true, paused: true }),
            gsap.to(blob, {
              opacity: 0.8,
              duration: drift.duration / 2,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: i,
              paused: true,
            })
          );
        });
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => drifts.forEach((tween) => (self.isActive ? tween.resume() : tween.pause())),
        });

        reveal(
          ref.current.querySelectorAll(".focus-reveal"),
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.15 },
          { trigger: ref.current, start: "top 60%" }
        );
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="focus" data-bg="#050816">
      <div className="focus-stage">
        <div className="blob-wrap is-1" data-speed="-50">
          <div className="blob" />
        </div>
        <div className="blob-wrap is-2" data-speed="70">
          <div className="blob" />
        </div>
        {GHOSTS.map((ghost) => (
          <span
            key={ghost.text}
            className="ghost-file"
            data-speed={ghost.speed}
            aria-hidden="true"
            style={{ left: ghost.left, top: ghost.top }}
          >
            {ghost.text}
          </span>
        ))}

        <div className="focus-content">
          <SplitHeading text={t("focus.title")} className="focus-title" />
          <p className="focus-lead focus-reveal">{t("focus.lead")}</p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxFocus;
