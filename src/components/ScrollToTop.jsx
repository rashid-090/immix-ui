import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // Detects POP (back button), PUSH, or REPLACE

  useEffect(() => {
    const scrollToTop = () => {
      if (window.lenis) {
        // Use immediate: true to prevent a weird sliding animation on back/forward
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Small timeout ensures the DOM has rendered the new page content
    // before we calculate the scroll position
    const timeoutId = setTimeout(scrollToTop, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname, navType]); 

  return null;
};
export default ScrollToTop;