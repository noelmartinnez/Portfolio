import React from "react";

// Dibujos de línea para las tarjetas del coverflow de skills, uno por
// categoría (mismo `id` que skillsBase). Trazo fino + nodos rellenos.
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
const Node = ({ cx, cy, r = 7 }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="var(--cf-node)" stroke="currentColor" strokeWidth="1.4" />
    <circle cx={cx} cy={cy} r={r * 0.3} fill="currentColor" />
  </g>
);

const ART = {
  languages: (
    <>
      <rect x="22" y="14" width="116" height="72" rx="8" {...S} />
      <path d="M22 28h116" {...S} />
      <circle cx="31" cy="21" r="1.8" fill="currentColor" />
      <circle cx="38" cy="21" r="1.8" fill="currentColor" />
      <path d="M62 44l-12 12 12 12M98 44l12 12-12 12M86 40l-12 32" {...S} strokeWidth="2.2" />
    </>
  ),
  backend: (
    <>
      <path d="M80 26L44 64M80 26v38M80 26l36 38" {...S} />
      <path d="M44 64l-3 4M80 64v4M116 64l3 4" {...S} />
      <Node cx={80} cy={24} r={10} />
      <Node cx={42} cy={70} />
      <Node cx={80} cy={72} />
      <Node cx={118} cy={70} />
    </>
  ),
  data: (
    <>
      <ellipse cx="54" cy="28" rx="24" ry="8" {...S} />
      <path d="M30 28v40c0 4.4 10.7 8 24 8s24-3.6 24-8V28M30 48c0 4.4 10.7 8 24 8s24-3.6 24-8" {...S} />
      <path d="M92 36h40M92 50h40M92 64h40" {...S} strokeDasharray="4 6" />
      <path d="M84 50h4" {...S} />
      <rect x="96" y="31" width="10" height="10" rx="2" fill="currentColor" opacity="0.8" />
      <rect x="112" y="45" width="10" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="100" y="59" width="10" height="10" rx="2" fill="currentColor" opacity="0.3" />
    </>
  ),
  ai: (
    <>
      {[30, 50, 70].map((a) =>
        [22, 50, 78].map((b) => <path key={`${a}-${b}`} d={`M44 ${a}L80 ${b}`} {...S} strokeWidth="1" opacity="0.6" />)
      )}
      {[22, 50, 78].map((a) =>
        [36, 64].map((b) => <path key={`o${a}-${b}`} d={`M80 ${a}L116 ${b}`} {...S} strokeWidth="1" opacity="0.6" />)
      )}
      {[30, 50, 70].map((y) => <Node key={`i${y}`} cx={44} cy={y} r={6} />)}
      {[22, 50, 78].map((y) => <Node key={`h${y}`} cx={80} cy={y} r={6} />)}
      {[36, 64].map((y) => <Node key={`o${y}`} cx={116} cy={y} r={6} />)}
    </>
  ),
  devops: (
    <>
      <path
        d="M80 50c-10-14-22-22-34-22-12 0-22 10-22 22s10 22 22 22c12 0 24-8 34-22s22-22 34-22c12 0 22 10 22 22s-10 22-22 22c-12 0-24-8-34-22z"
        {...S}
      />
      <path d="M104 24l10 4-6 9M56 76l-10-4 6-9" {...S} />
    </>
  ),
};

const SkillArt = ({ id }) => (
  <svg viewBox="0 0 160 100" aria-hidden="true" focusable="false">
    {ART[id] ?? ART.backend}
  </svg>
);

export default SkillArt;
