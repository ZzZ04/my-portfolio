import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [text, setText] = useState("");
  const targetText = '<"ZACH.POGI" />';
  const typingSpeed = 120;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < targetText.length) {
        setText((prev) => prev + targetText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  // color logic for syntax highlighting
  const getColor = (char) => {
    if (char === "<" || char === ">") return "text-blue-400"; // tag color
    if (char === '"') return "text-green-400"; // string quotes
    if (char === "/" || char === "=") return "text-gray-400"; // symbols
    if (char.match(/[A-Z]/)) return "text-yellow-400"; // capital letters
    if (char === ".") return "text-gray-500"; // dot
    if (char.match(/[a-z]/)) return "text-sky-400"; // lowercase
    return "text-gray-300"; // fallback
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-2xl font-mono tracking-wide">
      {/* Typing animation */}
      <div className="flex space-x-[1px] type-glow">
        {text.split("").map((char, i) => (
          <span key={i} className={`${getColor(char)} transition-all duration-200`}>
            {char}
          </span>
        ))}
        {/* blinking cursor */}
        <span className="w-[10px] h-6 bg-blue-500 animate-cursor ml-[2px]" />
      </div>

      <p className="text-gray-500 text-sm mt-6 animate-pulse">
        Initializing Batcomputer...
      </p>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-cursor {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}
