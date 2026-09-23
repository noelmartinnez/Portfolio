import { useEffect } from "react";
import { ScrollTrigger } from "../../utils/gsap";

// Mantiene ScrollTrigger sincronizado cuando cambia la altura del documento
// (demos, componentes lazy, lienzos que se montan al acercarse…).
const BgController = ({ targetRef }) => {
  useEffect(() => {
    let lastHeight = document.documentElement.scrollHeight;
    let timer;
    const observer = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const height = document.documentElement.scrollHeight;
        if (Math.abs(height - lastHeight) < 2) return;
        ScrollTrigger.refresh();
        lastHeight = document.documentElement.scrollHeight;
      }, 200);
    });
    observer.observe(targetRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [targetRef]);

  return null;
};

export default BgController;
