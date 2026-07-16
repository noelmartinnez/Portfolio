import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { widgetRegistry } from "./registry";

const DemoPanel = ({ index, category, categoryLabel, title, subtitle, concept, keyPoints, widgetKey, accent, ui, isMobile }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const Widget = widgetRegistry[widgetKey];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      viewport={{ once: true, amount: 0.2 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 overflow-hidden"
      style={{ boxShadow: `0 0 60px -20px ${accent}55` }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      <div className={`flex flex-col gap-1 mb-5 ${isMobile ? "items-center text-center" : ""}`}>
        <span
          className="text-[11px] uppercase tracking-wider font-semibold w-fit px-2.5 py-1 rounded-full border"
          style={{ color: accent, borderColor: `${accent}55`, background: `${accent}14` }}
        >
          {categoryLabel}
        </span>
        <h3 className="text-white font-bold text-[22px] sm:text-[24px] mt-2">{title}</h3>
        <p className="text-secondary text-[14px]">{subtitle}</p>
      </div>

      <p className={`text-white-100 text-[14px] leading-[24px] mb-4 ${isMobile ? "text-center" : ""}`}>{concept}</p>

      {keyPoints?.length > 0 && (
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-6">
          {keyPoints.map((point, i) => (
            <li key={i} className="text-secondary text-[13px] flex gap-2">
              <span style={{ color: accent }}>▸</span>
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className={`flex ${isMobile ? "justify-center" : "justify-start"}`}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors"
          style={{
            color: open ? "#fff" : accent,
            borderColor: `${accent}55`,
            background: open ? accent : `${accent}14`,
          }}
        >
          {open ? t("demos.hideLabel") : t("demos.tryLabel")}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && Widget && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 mt-5 pt-5">
              <Widget ui={ui} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DemoPanel;
