// Ilustraciones de las tarjetas de proyecto: cada una resume de un vistazo de
// qué va el proyecto (clave = `id` de projectsBase en src/constants).

const ACCENT = "#915eff";
const SOFT = "#c9a6ff";
const INK = "rgba(243,243,243,0.85)";
const DIM = "rgba(243,243,243,0.28)";
const FAINT = "rgba(243,243,243,0.12)";

// Tablero de 4 en raya con una línea ganadora en diagonal.
const Connect4 = () => {
  const cols = 7;
  const rows = 6;
  const board = [
    ".......",
    ".......",
    "...a...",
    "..ab...",
    ".abba..",
    "abbaab.",
  ];
  return (
    <svg viewBox="0 0 300 260" fill="none">
      <rect x="38" y="30" width="224" height="194" rx="14" fill={FAINT} stroke={DIM} strokeWidth="1.5" />
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => {
          const cell = board[r][c];
          const fill = cell === "a" ? ACCENT : cell === "b" ? SOFT : "rgba(5,8,22,0.55)";
          return <circle key={`${r}-${c}`} cx={60 + c * 30} cy={50 + r * 30} r="11" fill={fill} />;
        })
      )}
      <line x1="60" y1="200" x2="150" y2="110" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
};

// Planeta con anillo, estrellas y una ficha de enciclopedia.
const StarWars = () => (
  <svg viewBox="0 0 300 260" fill="none">
    {[
      [30, 30], [250, 24], [270, 120], [40, 200], [120, 20], [200, 230], [20, 110],
    ].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill={INK} />
    ))}
    <circle cx="110" cy="120" r="54" fill="url(#sw-planet)" />
    <ellipse cx="110" cy="124" rx="86" ry="18" stroke={SOFT} strokeWidth="2" opacity="0.8" transform="rotate(-14 110 124)" />
    <rect x="178" y="130" width="96" height="92" rx="10" fill="rgba(5,8,22,0.6)" stroke={DIM} strokeWidth="1.5" />
    <rect x="190" y="144" width="48" height="6" rx="3" fill={SOFT} />
    <rect x="190" y="160" width="70" height="4" rx="2" fill={DIM} />
    <rect x="190" y="172" width="60" height="4" rx="2" fill={DIM} />
    <rect x="190" y="184" width="66" height="4" rx="2" fill={DIM} />
    <rect x="190" y="200" width="36" height="12" rx="6" stroke={ACCENT} strokeWidth="1.5" />
    <defs>
      <radialGradient id="sw-planet" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#d9c6ff" />
        <stop offset="55%" stopColor={ACCENT} />
        <stop offset="100%" stopColor="#2a1466" />
      </radialGradient>
    </defs>
  </svg>
);

// Coche, pin de ubicación y calendario de reservas.
const AutoBnB = () => (
  <svg viewBox="0 0 300 260" fill="none">
    <path d="M40 170 L62 132 Q70 120 86 120 L170 120 Q186 120 196 132 L222 162 L250 168 Q262 170 262 182 L262 196 L40 196 Z" fill={FAINT} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M78 132 L92 158 L150 158 L150 132 Z M162 132 L162 158 L204 158 L188 136 Q184 132 176 132 Z" fill="rgba(145,94,255,0.35)" />
    <circle cx="88" cy="198" r="18" fill="#050816" stroke={SOFT} strokeWidth="3" />
    <circle cx="218" cy="198" r="18" fill="#050816" stroke={SOFT} strokeWidth="3" />
    <path d="M150 28 C132 28 120 41 120 57 C120 80 150 104 150 104 C150 104 180 80 180 57 C180 41 168 28 150 28 Z" fill={ACCENT} />
    <circle cx="150" cy="57" r="10" fill="#050816" />
    <rect x="206" y="30" width="62" height="56" rx="8" stroke={DIM} strokeWidth="1.5" />
    <rect x="206" y="30" width="62" height="14" rx="7" fill={DIM} />
    {[0, 1, 2].map((r) =>
      [0, 1, 2, 3].map((c) => (
        <rect
          key={`${r}-${c}`}
          x={213 + c * 13}
          y={50 + r * 11}
          width="8"
          height="6"
          rx="1.5"
          fill={r === 1 && c > 0 ? SOFT : FAINT}
        />
      ))
    )}
  </svg>
);

// Dígito "7" pixelado y probabilidades de salida del clasificador.
const Mnist = () => {
  const seven = [
    "........",
    ".######.",
    "......#.",
    ".....#..",
    "....#...",
    "...#....",
    "...#....",
    "........",
  ];
  const probs = [0.02, 0.01, 0.03, 0.01, 0.02, 0.01, 0.01, 0.94, 0.02, 0.03];
  return (
    <svg viewBox="0 0 300 260" fill="none">
      {seven.map((row, r) =>
        row.split("").map((cell, c) => (
          <rect
            key={`${r}-${c}`}
            x={24 + c * 17}
            y={40 + r * 17}
            width="15"
            height="15"
            rx="2"
            fill={cell === "#" ? "#f3f3f3" : FAINT}
            opacity={cell === "#" ? 0.9 : 1}
          />
        ))
      )}
      <path d="M172 108 L186 108" stroke={DIM} strokeWidth="2" strokeLinecap="round" />
      <path d="M182 102 L188 108 L182 114" stroke={DIM} strokeWidth="2" strokeLinecap="round" />
      {probs.map((p, i) => (
        <g key={i}>
          <text x="200" y={48 + i * 16} fontSize="10" fill={i === 7 ? SOFT : DIM} fontFamily="monospace">
            {i}
          </text>
          <rect x="212" y={40 + i * 16} width={Math.max(3, p * 64)} height="9" rx="2" fill={i === 7 ? ACCENT : DIM} />
        </g>
      ))}
    </svg>
  );
};

// Perceptrón de 3 capas con el gradiente volviendo hacia atrás.
const Backprop = () => {
  const layers = [
    [60, [70, 110, 150, 190]],
    [150, [55, 95, 135, 175, 215]],
    [240, [105, 155]],
  ];
  return (
    <svg viewBox="0 0 300 260" fill="none">
      {layers.slice(0, -1).map(([x, ys], l) =>
        ys.map((y) =>
          layers[l + 1][1].map((y2) => (
            <line key={`${l}-${y}-${y2}`} x1={x} y1={y} x2={layers[l + 1][0]} y2={y2} stroke={DIM} strokeWidth="1" />
          ))
        )
      )}
      {layers.map(([x, ys]) =>
        ys.map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="10" fill="#ebe4ff" stroke={ACCENT} strokeWidth="2" />)
      )}
      <path d="M232 238 Q150 262 68 238" stroke={SOFT} strokeWidth="2" strokeDasharray="5 5" />
      <path d="M78 232 L66 238 L76 247" stroke={SOFT} strokeWidth="2" strokeLinecap="round" />
      <text x="150" y="30" textAnchor="middle" fontSize="12" fill={SOFT} fontFamily="monospace">
        ∂L/∂w
      </text>
    </svg>
  );
};

// Dos imágenes casi idénticas unidas por su similitud.
const ImgTwin = () => {
  const photo = (x, rot) => (
    <g transform={`rotate(${rot} ${x + 50} 120)`}>
      <rect x={x} y="60" width="100" height="120" rx="8" fill="rgba(5,8,22,0.6)" stroke={INK} strokeWidth="2" />
      <circle cx={x + 70} cy="90" r="10" fill={SOFT} />
      <path d={`M${x + 8} 168 L${x + 38} 124 L${x + 58} 148 L${x + 72} 134 L${x + 92} 168 Z`} fill={ACCENT} opacity="0.85" />
    </g>
  );
  return (
    <svg viewBox="0 0 300 260" fill="none">
      {photo(30, -6)}
      {photo(170, 5)}
      <path d="M132 120 L168 120" stroke={SOFT} strokeWidth="2" strokeDasharray="4 4" />
      <rect x="112" y="200" width="76" height="26" rx="13" fill={ACCENT} />
      <text x="150" y="217" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="monospace">
        sim 0.97
      </text>
    </svg>
  );
};

const CodeGlyph = () => (
  <svg viewBox="0 0 300 260" fill="none">
    <path d="M110 90 L70 130 L110 170 M190 90 L230 130 L190 170 M165 70 L135 190" stroke={SOFT} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ARTS = {
  connect4: Connect4,
  starwars: StarWars,
  autobnb: AutoBnB,
  mnist: Mnist,
  backprop: Backprop,
  imgtwin: ImgTwin,
};

const ProjectArt = ({ id }) => {
  const Art = ARTS[id] ?? CodeGlyph;
  return <Art />;
};

export default ProjectArt;
