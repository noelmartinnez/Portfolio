import { useEffect, useRef, useState } from "react";

// Tracks whether an element is on/near screen so idle WebGL canvases can pause
// their render loop instead of burning GPU/CPU while scrolled out of view.
export const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};
