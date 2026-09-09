import { useState, useEffect } from "react";

// Breakpoints compartidos por todas las secciones: por debajo de 1100px las
// rejillas pasan a una sola columna y las tarjetas se centran.
const MOBILE_QUERY = "(max-width: 500px)";
const TABLET_QUERY = "(min-width: 500px) and (max-width: 1100px)";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const tabletQuery = window.matchMedia(TABLET_QUERY);

    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsTablet(event.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return { isMobile, isTablet };
};
