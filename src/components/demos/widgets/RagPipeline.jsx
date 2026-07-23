import React, { Fragment, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CORPUS_IDS, corpusVectors, queryVectors } from "../lib/embeddings";
import { cosineSimilarity } from "../lib/cosine";

const STAGE_KEYS = ["query", "retrieve", "augment", "generate"];
const RAG_QUERY_VECTOR_ID = "q3";
const TOP_N = 3;

const useTypewriter = (text, active, reducedMotion) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) {
      setOutput(text);
      return;
    }
    setOutput("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 22);
    return () => clearInterval(interval);
  }, [text, active, reducedMotion]);

  return output;
};

const RagPipeline = ({ ui }) => {
  const reducedMotion = useReducedMotion();
  const [stageIndex, setStageIndex] = useState(reducedMotion ? STAGE_KEYS.length - 1 : 0);

  useEffect(() => {
    if (reducedMotion) setStageIndex(STAGE_KEYS.length - 1);
  }, [reducedMotion]);

  const ranking = useMemo(() => {
    const qVec = queryVectors[RAG_QUERY_VECTOR_ID];
    return CORPUS_IDS.map((id) => ({ id, score: cosineSimilarity(qVec, corpusVectors[id]) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, TOP_N);
  }, []);

  const context = ranking.map((r) => ui.corpusLabels[r.id]).join(" · ");
  const answer = useTypewriter(ui.answer, stageIndex >= 3, reducedMotion);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 max-[500px]:hidden">
        {STAGE_KEYS.map((key, i) => (
          <Fragment key={key}>
            <div className="flex flex-col items-center gap-2 min-w-[84px]">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center border text-[12px] font-bold transition-all duration-500 ${
                  i <= stageIndex
                    ? "bg-[#915eff] border-[#915eff] text-white shadow-[0_0_16px_#915eff99]"
                    : "border-white/15 text-secondary"
                }`}
              >
                {i + 1}
              </div>
              <span className="text-[11px] text-secondary text-center">{ui.steps[key]}</span>
            </div>
            {i < STAGE_KEYS.length - 1 && (
              <div className="flex-1 h-[2px] relative bg-white/10 overflow-hidden min-w-[24px]">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#915eff] to-transparent"
                  initial={{ width: "0%" }}
                  animate={{ width: i < stageIndex ? "100%" : "0%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="grid gap-3">
        <div className="bg-black-100/40 border border-white/10 rounded-xl p-4 max-[500px]:text-center">
          <p className="text-[11px] uppercase tracking-wider text-secondary mb-1">{ui.steps.query}</p>
          <p className="text-[14px] text-white-100">{ui.query}</p>
        </div>

        {stageIndex >= 1 && (
          <div className="bg-black-100/40 border border-white/10 rounded-xl p-4">
            <p className="text-[11px] uppercase tracking-wider text-secondary mb-1">{ui.steps.retrieve}</p>
            <div className="flex flex-col gap-1">
              {ranking.map((r) => (
                <div key={r.id} className="flex justify-between text-[13px] text-white-100">
                  <span>{ui.corpusLabels[r.id]}</span>
                  <span className="text-secondary">{(r.score * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {stageIndex >= 2 && (
          <div className="bg-black-100/40 border border-white/10 rounded-xl p-4">
            <p className="text-[11px] uppercase tracking-wider text-secondary mb-1">{ui.steps.augment}</p>
            <p className="text-[13px] text-white-100">
              {ui.retrievedIntro} {context}
            </p>
          </div>
        )}

        {stageIndex >= 3 && (
          <div className="bg-black-100/40 border border-[#915eff]/40 rounded-xl p-4 shadow-[0_0_20px_#915eff33] max-[500px]:text-center">
            <p className="text-[11px] uppercase tracking-wider text-secondary mb-1">{ui.steps.generate}</p>
            <p className="text-[14px] text-white-100 min-h-[22px]">
              {answer}
              {answer.length < ui.answer.length && <span className="animate-pulse">▍</span>}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-4 max-[500px]:justify-center">
        <button
          type="button"
          onClick={() => setStageIndex((i) => Math.min(i + 1, STAGE_KEYS.length - 1))}
          disabled={stageIndex >= STAGE_KEYS.length - 1}
          className="self-start text-[13px] text-[#915eff] hover:underline font-medium disabled:opacity-40 disabled:no-underline disabled:cursor-not-allowed"
        >
          {ui.nextLabel} →
        </button>
        <button
          type="button"
          onClick={() => setStageIndex(0)}
          className="self-start text-[13px] text-[#915eff] hover:underline font-medium"
        >
          {ui.replayLabel} ↻
        </button>
      </div>
    </div>
  );
};

export default RagPipeline;
