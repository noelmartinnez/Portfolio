import React, { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, DESKTOP_MOTION, COMPACT_MOTION, reveal } from "../../utils/gsap";
import { useMediaQuery } from "../../hooks/useResponsive";
import SplitHeading from "./SplitHeading";
import { useCarousel, CarouselDots } from "./Carousel";

export const HCol = ({ className = "", children }) => (
  <div className={`h-col ${className}`}>{children}</div>
);

// Cabecera estándar de una pista: eyebrow + título + texto + pista de uso.
export const HorizontalHead = ({ eyebrow, title, text, hint }) => (
  <>
    <p className="eyebrow">{eyebrow}</p>
    <SplitHeading text={title} className="h-title" />
    {text && <p className="h-text">{text}</p>}
    {hint && <p className="h-hint">{hint}</p>}
  </>
);

// Pausas (en viewports) dentro del tramo anclado: al entrar, para leer el
// título mientras las tarjetas terminan de entrar; al salir, para ver entera
// la última tarjeta antes de que la página siga bajando.
const START_HOLD = 0.35;
const END_HOLD = 0.3;

// Sección con scroll lateral obligatorio (equivalente a .h-pin > .h-track):
// en escritorio se ancla y el scroll vertical desplaza la pista en horizontal;
// por debajo de 1100px (o con reduced-motion) la pista es un carrusel nativo.
const HorizontalSection = ({ id, bg, head, compactHead, children }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const isCompact = !useMediaQuery(DESKTOP_MOTION);
  // En táctil la pista es un carrusel con la tarjeta central destacada.
  const carousel = useCarousel({
    trackRef,
    itemSelector: ".h-col:not(.h-head)",
    enabled: isCompact,
    deps: [children],
  });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MOTION, () => {
        const track = trackRef.current;
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        const isStatic = () => distance() < 40;

        // El pin cubre pausa inicial + recorrido + pausa final. Se ancla
        // .h-pin (no la <section>): su pin-spacer no debe envolver nodos raíz
        // que React reordena, y así los rellenos de la sección quedan como
        // scroll libre antes y después.
        const pin = sectionRef.current.querySelector(".h-pin");
        const hold = () => window.innerHeight * START_HOLD;
        const pinST = ScrollTrigger.create({
          trigger: pin,
          pin,
          start: "top top",
          end: () =>
            isStatic() ? "+=0" : `+=${hold() + distance() + window.innerHeight * END_HOLD}`,
          invalidateOnRefresh: true,
          // Si todo cabe en pantalla no hay recorrido: se oculta la pista de uso.
          onRefresh: () => sectionRef.current?.classList.toggle("is-static", isStatic()),
        });

        // El desplazamiento arranca tras la pausa inicial, en posiciones
        // absolutas calculadas a partir del pin (ya refrescado, va antes).
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            start: () => pinST.start + hold(),
            end: () => pinST.start + hold() + distance(),
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
        tweenRef.current = tween;

        const along = (col) => ({
          trigger: col,
          containerAnimation: tween,
          start: "left right",
          end: "right left",
          scrub: true,
        });

        track.querySelectorAll(".h-col:not(.h-head)").forEach((col) => {
          const card = col.querySelector(".fcard") || col.firstElementChild || col;

          // Las columnas que ya se ven al anclar entran de golpe; el resto
          // suben y se enderezan según avanzan por la pista, y terminan de
          // colocarse pronto para que la última quede entera al final.
          if (col.offsetLeft < window.innerWidth * 0.9) {
            reveal(
              card,
              { y: 80, rotate: 2, autoAlpha: 0 },
              { y: 0, rotate: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out" },
              { trigger: sectionRef.current, start: "top 65%" }
            );
          } else {
            gsap.from(card, {
              y: 140,
              rotate: 5,
              autoAlpha: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: col,
                containerAnimation: tween,
                start: "left 100%",
                end: "left 88%",
                scrub: true,
              },
            });
          }

          // Destello que barre la tarjeta y parallax interno del dibujo.
          const sheen = col.querySelector(".fcard-sheen");
          if (sheen) {
            gsap.fromTo(sheen, { xPercent: -120 }, { xPercent: 260, ease: "none", scrollTrigger: along(col) });
          }
          const art = col.querySelector(".fcard-art");
          if (art) {
            gsap.fromTo(art, { xPercent: 6 }, { xPercent: -6, ease: "none", scrollTrigger: along(col) });
          }
        });

        return () => {
          tweenRef.current = null;
        };
      });

      mm.add(COMPACT_MOTION, () => {
        reveal(
          trackRef.current.querySelectorAll(".h-col:not(.h-head)"),
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", stagger: 0.08 },
          { trigger: trackRef.current, start: "top 80%" }
        );
      });
    },
    { scope: sectionRef }
  );

  // Con teclado, lleva la pista hasta la tarjeta enfocada.
  const handleFocus = (event) => {
    const st = tweenRef.current?.scrollTrigger;
    const col = event.target.closest(".h-col");
    // Solo con teclado: un clic (p. ej. en el "+") no debe mover la pista.
    if (!st || !col || !event.target.matches(":focus-visible")) return;
    const x = Math.min(st.end - st.start, Math.max(0, col.offsetLeft - window.innerWidth * 0.25));
    window.scrollTo({ top: st.start + x, behavior: "instant" });
  };

  return (
    <section id={id} ref={sectionRef} data-bg={bg} className="h-section">
      <div className="h-head-compact">{compactHead ?? head}</div>
      <div className="h-pin">
        <div ref={trackRef} className="h-track" onFocusCapture={handleFocus}>
          <div className="h-col h-head">{head}</div>
          {children}
        </div>

        {isCompact && <CarouselDots {...carousel} />}
      </div>
    </section>
  );
};

export default HorizontalSection;
