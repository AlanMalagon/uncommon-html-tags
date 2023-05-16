"use client";
import { FC, ReactElement, ReactNode, useEffect } from "react";

// Highlight.js to make the code colorful based on synstax.
import "highlight.js/styles/base16/ros-pine-moon.css";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";

// Code formatting.
import { renderToStaticMarkup } from "react-dom/server";
import htmlParser from "prettier/parser-html";
import prettier from "prettier/standalone";

hljs.registerLanguage("html", xml);

const CodeViewer: FC<{
  children: ReactNode;
  ariaLabel: string;
  className: string;
}> = ({ children, ariaLabel, className }) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <pre
      aria-label={ariaLabel}
      className="p-4 overflow-scroll text-white text-xs"
    >
      <code className={`html rounded ${className}`}>
        {prettier.format(renderToStaticMarkup(children as ReactElement), {
          parser: "html",
          plugins: [htmlParser],
          htmlWhitespaceSensitivity: "ignore",
          printWidth: 60,
        })}
        ;
      </code>
    </pre>
  );
};

export default CodeViewer;
