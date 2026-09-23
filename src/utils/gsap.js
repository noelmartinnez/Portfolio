import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// En móvil, al ocultarse la barra del navegador cambia la altura del viewport.
// Sin esto, ScrollTrigger recalcularía todo y el scroll daría saltos.
ScrollTrigger.config({ ignoreMobileResize: true });

// Mismos cortes que useResponsive: por encima de 1100px (y sin reduced-motion)
// las secciones se anclan; por debajo, las pistas son carruseles nativos.
// Deben coincidir con las media queries "pinned" de index.css.
export const DESKTOP_MOTION = "(min-width: 1101px) and (prefers-reduced-motion: no-preference)";
export const COMPACT_MOTION = "(max-width: 1100px) and (prefers-reduced-motion: no-preference)";
export const ANY_MOTION = "(prefers-reduced-motion: no-preference)";
// Dispositivos sin ratón: la descripción de las tarjetas se abre al tocarlas.
export const TOUCH = "(hover: none)";

export { gsap, ScrollTrigger, useGSAP };
