// Deterministic FNV-1a string hash, used for stable pseudo-ids/colors (no Math.random).
export const hashString = (str) => {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

export const hashToHue = (str) => hashString(str) % 360;
