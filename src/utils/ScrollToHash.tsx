import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash(): null {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          window.scrollBy(0, -80);
        }, 100);
      }
    }
  }, [hash]);

  return null;
}