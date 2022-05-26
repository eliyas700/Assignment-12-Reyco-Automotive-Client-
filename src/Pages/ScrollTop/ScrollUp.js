import React, { useState } from "react";
import "./ScrollStyle.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      title="Scroll To Top"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
      className="h-6 w-6 scrollTop bg-secondary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};

export default ScrollUp;
