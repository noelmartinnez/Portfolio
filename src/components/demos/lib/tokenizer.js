import { hashString } from "./hash";

const WORD_RE = /[A-Za-zÀ-ÿ0-9]+|[^\sA-Za-zÀ-ÿ0-9]/g;

const wordTokens = (text) => text.match(WORD_RE) || [];

const subwordTokens = (text) => {
  const words = wordTokens(text);
  const chunks = [];

  words.forEach((word) => {
    if (word.length <= 4 || !/[A-Za-zÀ-ÿ]/.test(word)) {
      chunks.push(word);
      return;
    }
    for (let i = 0; i < word.length; i += 4) {
      const piece = word.slice(i, i + 4);
      chunks.push(i === 0 ? piece : `##${piece}`);
    }
  });

  return chunks;
};

const charTokens = (text) => text.split("");

export const tokenize = (text, mode) => {
  const raw =
    mode === "char" ? charTokens(text) : mode === "subword" ? subwordTokens(text) : wordTokens(text);

  return raw.map((surface, index) => {
    const key = surface.toLowerCase();
    return {
      id: index,
      surface,
      tokenId: hashString(key) % 50000,
      hue: hashString(key) % 360,
    };
  });
};

export const estimateCost = (tokenCount, ratePer1k) => (tokenCount / 1000) * ratePer1k;
