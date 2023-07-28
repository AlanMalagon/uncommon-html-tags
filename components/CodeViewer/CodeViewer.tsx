"use client";
import { FC, ReactElement, ReactNode, useEffect } from "react";

// Highlight.js to make the code colorful based on synstax.
import "highlight.js/styles/base16/ros-pine-moon.css";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";

// Code formatting.
import { renderToString } from "react-dom/server";
import htmlParser from "prettier/parser-html";
import prettier from "prettier/standalone";

hljs.registerLanguage("html", xml);

const CodeViewer: FC<{
  children: ReactNode;
  ariaLabel: string;
  className: string;
}> = ({ children, ariaLabel, className }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const codeContent = renderToString(children as ReactElement);
  const formatedCode = prettier.format(codeContent, {
    parser: "html",
    plugins: [htmlParser],
    htmlWhitespaceSensitivity: "ignore",
    printWidth: 60,
  });

  return (
    <pre
      aria-label={ariaLabel}
      className="p-4 overflow-auto text-white text-xs"
    >
      <code className={`html rounded ${className}`}>{formatedCode}</code>
    </pre>
  );
};

export default CodeViewer;
