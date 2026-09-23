import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { widgetRegistry } from "./registry";

// Playground: una única ventana con una pestaña por demo. El widget está
// siempre montado y listo para usar, sin botón de "probar".
const DemoPanel = ({ demos }) => {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const demo = demos[active] ?? demos[0];
  const Widget = widgetRegistry[demo.widgetKey];

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const dir = event.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + demos.length) % demos.length;
    setActive(next);
    event.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus();
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.75)}
      className="demo-window"
      style={{ "--accent": demo.accent }}
    >
      <div className="demo-bar">
        <span className="demo-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="demo-file">{demo.file}</span>
      </div>

      <div className="demo-tabs" role="tablist" onKeyDown={handleKeyDown} style={{ "--tabs": demos.length }}>
        {demos.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`demo-tab-${item.id}`}
            aria-selected={index === active}
            aria-controls={`demo-panel-${item.id}`}
            tabIndex={index === active ? 0 : -1}
            className={`demo-tab${index === active ? " is-active" : ""}`}
            style={{ "--accent": item.accent }}
            onClick={() => setActive(index)}
          >
            <span className="demo-tab-num">/{String(index + 1).padStart(2, "0")}</span>
            {/* En táctil, título corto (si lo hay) para que quepan las pestañas. */}
            <span className={item.shortTitle ? "demo-tab-full" : undefined}>{item.title}</span>
            {item.shortTitle && <span className="demo-tab-short">{item.shortTitle}</span>}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={demo.id}
          id={`demo-panel-${demo.id}`}
          role="tabpanel"
          aria-labelledby={`demo-tab-${demo.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="demo-body"
        >
          <p className="demo-concept">{demo.concept}</p>
          {/* Con el idioma cambia el texto de ejemplo: se remonta el widget. */}
          {Widget && <Widget key={`${demo.id}-${lang}`} ui={demo.ui} />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default DemoPanel;
