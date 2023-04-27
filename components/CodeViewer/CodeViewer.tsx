"use client";
import { FC, ReactNode, useEffect } from "react";
import "highlight.js/styles/base16/ros-pine-moon.css";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("html", xml);

// Make it have the live example embedded with the code in tabs
const CodeViewer: FC<{ children: ReactNode; ariaLabel: string }> = ({
  children,
  ariaLabel,
}) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <pre
      aria-label={ariaLabel}
      className="p-2 rounded bg-slate-800 overflow-scroll text-white text-xs"
    >
      <code className="html">{children}</code>
    </pre>
  );
};

export default CodeViewer;
