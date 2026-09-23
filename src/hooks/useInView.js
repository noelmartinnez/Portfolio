import { useEffect, useRef, useState } from "react";

// Tracks whether an element is on/near screen so idle WebGL canvases can pause
// their render loop instead of burning GPU/CPU while scrolled out of view.
// `seen` stays true after the first time it gets near, so heavy canvases can
// mount lazily once and then just pause/resume.
export const useInView = (rootMargin = "200px") => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView, seen };
};
