import { useEffect, useRef, useState } from "react";
import { gsap } from "../../utils/gsap";

// Carrusel táctil sobre el scroll nativo de una pista: la tarjeta que pasa por
// el centro crece y se ilumina, las de los lados se encogen. Devuelve cuántas
// hay, cuál está activa y cómo ir a una (para los puntos de posición).
export const useCarousel = ({ trackRef, itemSelector, enabled, deps = [] }) => {
  const [slides, setSlides] = useState(0);
  const [active, setActive] = useState(0);
  const swipedRef = useRef(false);

  useEffect(() => {
    if (!enabled || !trackRef.current) return undefined;
    const track = trackRef.current;
    const items = Array.from(track.querySelectorAll(itemSelector));
    setSlides(items.length);
    if (!items.length) return undefined;

    const cards = items.map((item) => item.querySelector(".fcard") || item.firstElementChild || item);
    const withMotion = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    const setters = cards.map((card) => ({
      scale: gsap.quickSetter(card, "scale"),
      opacity: gsap.quickSetter(card, "opacity"),
    }));

    let frame = 0;
    const update = () => {
      frame = 0;
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDistance = Infinity;

      items.forEach((item, i) => {
        const distance = Math.abs(center - (item.offsetLeft + item.offsetWidth / 2));
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
        if (withMotion) {
          const k = Math.min(1, distance / track.clientWidth / 0.6);
          setters[i].scale(1 - k * 0.12);
          setters[i].opacity(1 - k * 0.45);
        }
      });

      setActive((current) => (current === best ? current : best));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      if (!swipedRef.current) {
        swipedRef.current = true;
        track.closest("section")?.classList.add("is-swiped");
      }
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      gsap.set(cards, { clearProps: "scale,opacity" });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, itemSelector, ...deps]);

  const goTo = (index) => {
    const item = trackRef.current?.querySelectorAll(itemSelector)[index];
    item?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return { slides, active, goTo };
};

// Fila de puntos de posición, compartida por las pistas y por Skills.
export const CarouselDots = ({ slides, active, goTo }) =>
  slides > 1 ? (
    <div className="h-dots">
      {Array.from({ length: slides }, (_, i) => (
        <button
          key={i}
          type="button"
          className={i === active ? "is-active" : ""}
          aria-label={`${i + 1} / ${slides}`}
          aria-current={i === active}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  ) : null;
