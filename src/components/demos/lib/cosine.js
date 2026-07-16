export const dot = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);

export const magnitude = (a) => Math.sqrt(dot(a, a));

export const cosineSimilarity = (a, b) => {
  const m = magnitude(a) * magnitude(b);
  return m === 0 ? 0 : dot(a, b) / m;
};
