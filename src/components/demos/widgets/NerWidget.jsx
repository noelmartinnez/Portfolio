import React, { useEffect, useMemo, useState } from "react";
import { detectEntities, segmentText } from "../lib/ner";
import { anonymizeSegments } from "../lib/anonymize";

const ENTITY_COLORS = {
  person: "#f472b6",
  email: "#38bdf8",
  date: "#facc15",
  dni: "#4ade80",
  phone: "#fb923c",
  iban: "#a78bfa",
};

const NerWidget = ({ ui }) => {
  const [text, setText] = useState(ui.sampleText);
  const [debouncedText, setDebouncedText] = useState(ui.sampleText);
  const [mode, setMode] = useState("detect");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedText(text), 200);
    return () => clearTimeout(timer);
  }, [text]);

  const entities = useMemo(() => detectEntities(debouncedText), [debouncedText]);

  const segments = useMemo(() => {
    const base = segmentText(debouncedText, entities);
    return mode === "anonymize" ? anonymizeSegments(base) : base;
  }, [debouncedText, entities, mode]);

  const counts = useMemo(() => {
    const c = {};
    entities.forEach((e) => {
      c[e.type] = (c[e.type] || 0) + 1;
    });
    return c;
  }, [entities]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 max-[500px]:justify-center">
        {["detect", "anonymize"].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
              mode === m
                ? "bg-[#915eff] border-[#915eff] text-white"
                : "border-white/15 text-secondary hover:border-[#915eff]/60"
            }`}
          >
            {m === "detect" ? ui.detectLabel : ui.anonymizeLabel}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        maxLength={300}
        placeholder={ui.placeholder}
        className="w-full bg-black-100/60 border border-white/10 rounded-xl p-4 text-white text-[14px] outline-none focus:border-[#915eff]/60 resize-none"
      />
      <p className="text-secondary text-[12px] -mt-2 self-end">{text.length}/300</p>

      <p className="text-[14px] leading-[24px] text-white-100 bg-black-100/40 border border-white/10 rounded-xl p-4">
        {segments.map((segment, i) =>
          segment.type ? (
            <span
              key={i}
              className="rounded px-1 py-0.5 mx-0.5 font-medium"
              style={{
                color: ENTITY_COLORS[segment.type],
                background: `${ENTITY_COLORS[segment.type]}22`,
                boxShadow: `0 0 3px ${ENTITY_COLORS[segment.type]}0d`,
              }}
            >
              {segment.text}
            </span>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </p>

      <div className="flex flex-wrap gap-2">
        {Object.keys(ui.legend).map((type) => (
          <span
            key={type}
            className="flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-full border border-white/10 text-secondary"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: ENTITY_COLORS[type], boxShadow: `0 0 4px ${ENTITY_COLORS[type]}80` }}
            />
            {ui.legend[type]} · {counts[type] || 0}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NerWidget;
