"use client";

import { useEffect, useState } from "react";

export default function TextBorderAnimation({ text = "", className }) {
  const [isHoveredIn, setIsHoveredIn] = useState(false);
  const [isHoveredOut, setIsHoveredOut] = useState(false);

  const handleHover = () => {
    setIsHoveredIn(true);
  };

  const handleHoverExit = () => {
    setIsHoveredIn(false);
    setIsHoveredOut(true);
  };

  useEffect(() => {
    if (isHoveredOut) {
      const timer = setTimeout(() => {
        setIsHoveredOut(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isHoveredOut]);

  return (
    <div style={{ width: "fit-content" }} onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className="overflow-hidden">
      <span className={`text-5xl  text-foreground mb-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${className || ""}`}>{text}</span>
      <div className="relative mt-1 h-1 w-full ">
        <div
          className={`absolute left-0 top-0 h-full w-full bg-orange-500 transition-transform duration-300 ${isHoveredIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
        ></div>
        <div
          className={`absolute left-0 top-0 h-full w-full bg-orange-500 transition-transform duration-300 ${isHoveredOut ? "translate-x-full opacity-100" : "translate-x-0 opacity-0"
            }`}
        ></div>
      </div>
    </div>
  );
}
