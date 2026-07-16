// Fixed 3D "embeddings" for the constellation/RAG demos. Positions are invariant
// across language switches — only their i18n labels (data.js `ui.corpusLabels`) change.

export const CORPUS_IDS = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"];

export const corpusCategory = {
  c1: "infra",
  c2: "infra",
  c3: "infra",
  c4: "infra",
  c5: "infra",
  c6: "ai",
  c7: "ai",
  c8: "ai",
  c9: "ai",
  c10: "ai",
};

export const corpusVectors = {
  c1: [0.86, 0.28, -0.32],
  c2: [0.79, 0.35, -0.22],
  c3: [0.83, 0.18, -0.41],
  c4: [0.75, 0.22, -0.35],
  c5: [0.81, 0.31, -0.28],
  c6: [-0.58, 0.52, 0.48],
  c7: [-0.62, 0.47, 0.55],
  c8: [-0.55, 0.61, 0.42],
  c9: [-0.68, 0.44, 0.51],
  c10: [-0.51, 0.58, 0.49],
};

export const QUERY_IDS = ["q1", "q2", "q3"];

// q1: infra-focused · q2: AI-focused · q3: mixed (used by the RAG pipeline demo)
export const queryVectors = {
  q1: [0.8, 0.3, -0.3],
  q2: [-0.6, 0.5, 0.5],
  q3: [0.1, 0.55, 0.15],
};
