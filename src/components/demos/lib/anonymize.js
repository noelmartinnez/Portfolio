const PLACEHOLDER_LABELS = {
  person: "PERSON",
  email: "EMAIL",
  date: "DATE",
  dni: "ID",
  phone: "PHONE",
  iban: "IBAN",
};

// Replaces entity segments with consistent pseudonyms (same original text -> same placeholder).
export const anonymizeSegments = (segments) => {
  const counters = {};
  const seen = new Map();

  return segments.map((segment) => {
    if (!segment.type) return segment;

    const key = `${segment.type}:${segment.text}`;
    if (seen.has(key)) return { ...segment, text: seen.get(key) };

    counters[segment.type] = (counters[segment.type] || 0) + 1;
    const label = `[${PLACEHOLDER_LABELS[segment.type] || segment.type.toUpperCase()}_${counters[segment.type]}]`;
    seen.set(key, label);
    return { ...segment, text: label };
  });
};
