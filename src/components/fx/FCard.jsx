import React, { useState } from "react";
import { useMediaQuery } from "../../hooks/useResponsive";
import { TOUCH } from "../../utils/gsap";

// Pares de gradiente (capa base / capa que se desvela) sobre la paleta morada.
const TONES = [
  ["#1b1440", "#0c0a22", "#915eff", "#3b1d8f"],
  ["#10183a", "#070b20", "#4f7cff", "#1e2a78"],
  ["#211038", "#0d0718", "#c084fc", "#5b21b6"],
  ["#141236", "#08071c", "#a78bfa", "#312e81"],
];

// Tarjeta del sistema .fcard: capa base + capa que se desvela en hover,
// título, brillo que sigue al cursor y pie de tarjeta (enlazado si hay href).
const FCard = ({
  index = 0,
  size = "",
  sub,
  big,
  art,
  image,
  imageAlt = "",
  reveal,
  caption,
  captionEnd,
  href,
  linkEnd = false,
  shot = false,
  plain = false,
}) => {
  const [b0, b1, r0, r1] = TONES[index % TONES.length];
  // `plain`: solo la imagen, con el nombre y el enlace en el pie (como la
  // tarjeta de la universidad). Sin capa lila, sin texto encima y sin "+".
  // Sin enlace ni descripción que desvelar, la tarjeta es solo informativa:
  // no reacciona al ratón (ni brillo, ni "+", ni elevación) ni recibe foco.
  const interactive = !plain && Boolean(href || reveal);
  // La descripción solo se abre con el "+" (que girado hace de "X"); el
  // enlace queda en el pie. En táctil, tocar la tarjeta también la abre.
  const touch = useMediaQuery(TOUCH);
  const [open, setOpen] = useState(false);
  const hasReveal = !plain && Boolean(reveal);
  const toggle = () => setOpen((v) => !v);

  const Media = href && !hasReveal && !plain ? "a" : "div";
  const mediaProps = Media === "a"
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : hasReveal && touch
    ? { onClick: toggle }
    : {};

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <article className={`fcard ${size}${shot ? " is-shot" : ""}${interactive ? "" : " is-inert"}${plain ? " is-plain" : ""}${open ? " is-open" : ""}`} style={{ "--b0": b0, "--b1": b1, "--r0": r0, "--r1": r1 }}>
      <Media
        className={`fcard-media${image ? " has-image" : ""}`}
        onPointerMove={interactive ? handlePointerMove : undefined}
        draggable={false}
        {...mediaProps}
      >
        {image && <img src={image} alt={imageAlt} loading="lazy" draggable={false} className="fcard-img" />}
        <div className="fcard-layer fcard-base" />
        {art && (
          <span className="fcard-art" aria-hidden="true">
            {art}
          </span>
        )}
        {reveal && !plain && (
          <div className="fcard-layer fcard-reveal">
            <div className="fcard-reveal-body">{reveal}</div>
          </div>
        )}
        <span className="fcard-sheen" aria-hidden="true" />
        <span className="fcard-glow" aria-hidden="true" />
        {!plain && (
          <div className="fcard-inner">
            {sub && <div className="sub">{sub}</div>}
            <div className="big">{big}</div>
          </div>
        )}
        {hasReveal ? (
          <button
            type="button"
            className="fcard-plus"
            aria-expanded={open}
            aria-label={typeof big === "string" ? big : undefined}
            onClick={(event) => {
              event.stopPropagation();
              toggle();
            }}
          >
            +
          </button>
        ) : (
          interactive && (
            <span className="fcard-plus" aria-hidden="true">
              +
            </span>
          )
        )}
      </Media>

      {(caption || captionEnd) &&
        (href ? (
          <div className="fcard-caption">
            {linkEnd ? (
              <span className="t">{caption}</span>
            ) : (
              <a className="t is-link" href={href} target="_blank" rel="noopener noreferrer">
                {caption}
              </a>
            )}
            {linkEnd ? (
              <a className="y is-link" href={href} target="_blank" rel="noopener noreferrer">
                {captionEnd}
              </a>
            ) : (
              <span className="y">{captionEnd}</span>
            )}
          </div>
        ) : (
          <div className="fcard-caption">
            <span className="t">{caption}</span>
            <span className="y">{captionEnd}</span>
          </div>
        ))}
    </article>
  );
};

export default FCard;
