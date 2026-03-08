import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "Kanna Reddy",
  "",
  "$ role",
  "Cybersecurity Enthusiast",
  "",
  "$ skills",
  "Network Security | Pentesting | SOC",
  "",
  "$ tools",
  "Nmap | Burp Suite | Wireshark | Linux"
];

export default function TerminalIntro() {

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    if (lineIndex >= lines.length) return;

    const timeout = setTimeout(() => {
      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        setDisplayedText(prev => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setDisplayedText(prev => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, 35);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, open]);

  return (
    <div className="fixed bottom-4 right-4 z-50">

      {/* minimized button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-black px-4 py-2 rounded-md font-mono shadow-lg"
        >
          open terminal
        </button>
      )}

      {/* terminal window */}
      {open && (
        <div className="w-90 bg-black/0 backdrop-sm text-green-400 font-mono rounded-lg border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]">

          <div className="flex items-center justify-between px-3 py-2 border-b border-green-500">

            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <span className="text-xs">kali@portfolio:~</span>

            <button
              onClick={() => setOpen(false)}
              className="text-xs text-red-400"
            >
              close
            </button>

          </div>

          <pre className="p-4 text-sm whitespace-pre-wrap">
            {displayedText}
            <span className="animate-pulse">█</span>
          </pre>

        </div>
      )}

    </div>
  );
}