import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokenize, estimateCost } from "../lib/tokenizer";

const RATE_PER_1K = 0.002;

const TokenizerWidget = ({ ui }) => {
  const [text, setText] = useState(ui.sampleText);
  const [debouncedText, setDebouncedText] = useState(ui.sampleText);
  const [mode, setMode] = useState("word");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedText(text), 200);
    return () => clearTimeout(timer);
  }, [text]);

  const tokens = useMemo(() => tokenize(debouncedText, mode), [debouncedText, mode]);
  const cost = estimateCost(tokens.length, RATE_PER_1K);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["word", "subword", "char"].map((m) => (
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
            {ui.modeLabels[m]}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={2}
        maxLength={300}
        className="w-full bg-black-100/60 border border-white/10 rounded-xl p-4 text-white text-[14px] outline-none focus:border-[#915eff]/60 resize-none"
      />
      <p className="text-secondary text-[12px] -mt-2 self-end">{text.length}/300</p>

      <div className="flex flex-wrap gap-1.5 bg-black-100/40 border border-white/10 rounded-xl p-4 min-h-[64px]">
        <AnimatePresence mode="popLayout">
          {tokens.map((token) => (
            <motion.span
              key={`${mode}-${token.id}-${token.surface}`}
              layout
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: token.id * 0.012 }}
              className="rounded-md px-2 py-1 text-[12px] font-mono border"
              style={{
                color: `hsl(${token.hue}, 85%, 75%)`,
                borderColor: `hsl(${token.hue}, 85%, 45%)`,
                background: `hsla(${token.hue}, 85%, 50%, 0.12)`,
              }}
              title={`#${token.tokenId}`}
            >
              {token.surface === " " ? "·" : token.surface}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-6 text-[13px] text-secondary">
        <span>
          {ui.tokensLabel}: <strong className="text-white">{tokens.length}</strong>
        </span>
        <span>
          {ui.costLabel}: <strong className="text-white">${cost.toFixed(5)}</strong>
        </span>
      </div>
    </div>
  );
};

export default TokenizerWidget;
