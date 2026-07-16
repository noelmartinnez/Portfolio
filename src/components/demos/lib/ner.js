// Regex + heuristics NER, fully deterministic and client-side (no model, no backend).

const EMAIL_RE = /[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}/g;
const IBAN_RE = /\b[A-Z]{2}\d{2}(?:\s?[0-9A-Z]{4}){2,7}\b/g;
const DNI_NIE_RE = /\b(?:\d{8}|[XYZxyz]\d{7})[A-Za-z]\b/g;
const PHONE_RE = /\b(?:\+\d{1,3}[\s.-]?)?(?:\d{2,4}[\s.-]){1,3}\d{2,4}\b/g;
const DATE_RE = /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g;
const PERSON_RE = /\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){1,2}\b/g;

// Priority used to resolve overlaps between entity types (higher = kept first).
const TYPE_PRIORITY = ["email", "iban", "dni", "phone", "date", "person"];

const findMatches = (regex, text, type) => {
  const re = new RegExp(regex);
  const matches = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    matches.push({ start: m.index, end: m.index + m[0].length, type, text: m[0] });
    if (m.index === re.lastIndex) re.lastIndex += 1;
  }
  return matches;
};

export const detectEntities = (text) => {
  if (!text) return [];

  const candidates = [
    ...findMatches(EMAIL_RE, text, "email"),
    ...findMatches(IBAN_RE, text, "iban"),
    ...findMatches(DNI_NIE_RE, text, "dni"),
    ...findMatches(PHONE_RE, text, "phone"),
    ...findMatches(DATE_RE, text, "date"),
    ...findMatches(PERSON_RE, text, "person"),
  ];

  candidates.sort(
    (a, b) => a.start - b.start || TYPE_PRIORITY.indexOf(a.type) - TYPE_PRIORITY.indexOf(b.type)
  );

  const kept = [];
  for (const entity of candidates) {
    const overlaps = kept.some((k) => entity.start < k.end && entity.end > k.start);
    if (!overlaps) kept.push(entity);
  }

  return kept.sort((a, b) => a.start - b.start);
};

export const segmentText = (text, entities) => {
  const segments = [];
  let cursor = 0;
  for (const entity of entities) {
    if (entity.start > cursor) segments.push({ text: text.slice(cursor, entity.start), type: null });
    segments.push({ text: text.slice(entity.start, entity.end), type: entity.type });
    cursor = entity.end;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), type: null });
  return segments;
};
