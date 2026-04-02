import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

type Props = {
  code: string;
  language: string;
};

export default function CodeBlock({ code, language }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-[#0a0a0a] overflow-hidden mb-8 shadow-2xl">
      
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#1a1a1a] border-b border-gray-800">
        <span className="text-xs font-mono text-gray-500 uppercase">
          {language}
        </span>

        <button
          onClick={handleCopy}
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "20px",
          background: "#0a0a0a",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}