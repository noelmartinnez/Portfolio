import React, { useMemo, useRef } from "react";
import { gsap, useGSAP, ANY_MOTION, reveal } from "../../utils/gsap";

// Divide el texto en palabras enmascaradas y las hace subir una a una al entrar
// en pantalla. Los tramos entre *asteriscos* (o la última palabra con
// `accentLast`) se pintan en el color de acento.
const parseWords = (text, accentLast) => {
  const words = [];
  String(text)
    .split("*")
    .forEach((segment, i) =>
      segment
        .split(/\s+/)
        .filter(Boolean)
        .forEach((word) => words.push({ text: word, em: i % 2 === 1 }))
    );

  if (accentLast && words.length && !words.some((w) => w.em)) {
    words[words.length - 1].em = true;
  }
  return words;
};

const SplitHeading = ({ as: Tag = "h2", text, className = "", accentLast = false, delay = 0 }) => {
  const ref = useRef(null);
  const playedRef = useRef(false);
  const words = useMemo(() => parseWords(text, accentLast), [text, accentLast]);
  const plain = words.map((w) => w.text).join(" ");

  useGSAP(
    () => {
      // Si el título ya se animó y solo cambia el texto (idioma), aparece tal cual.
      if (playedRef.current) return;
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        reveal(
          ref.current.querySelectorAll(".sw-i"),
          { yPercent: 115, rotate: 4 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1,
            delay,
            ease: "power4.out",
            stagger: 0.07,
            onStart: () => {
              playedRef.current = true;
            },
          },
          { trigger: ref.current, start: "top 88%" }
        );
      });
    },
    { scope: ref, dependencies: [plain], revertOnUpdate: true }
  );

  return (
    <Tag ref={ref} className={`split ${className}`}>
      <span className="sr-only">{plain}</span>
      {words.map((word, i) => (
        <React.Fragment key={`${word.text}-${i}`}>
          <span className="sw" aria-hidden="true">
            <span className={`sw-i${word.em ? " sw-em" : ""}`}>{word.text}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default SplitHeading;
