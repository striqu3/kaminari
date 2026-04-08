/**
 * KimonoGIF — Exibe o quimono animado com a cor de faixa correta
 * Cada faixa tem um GIF próprio hospedado no CDN
 * Troca com fade suave ao clicar em uma faixa diferente
 */

import { useState, useEffect } from "react";

interface JudocaSVGProps {
  beltColor: string;
  beltName: string;
}

const BELT_GIFS: Record<string, string> = {
  "#E5E7EB": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/fHyAmBhMQNhAXNty.gif",
  "#9CA3AF": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/klCbQtUryihHGUWH.gif",
  "#2563EB": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/uhGqZegrCNkftCMR.gif",
  "#EAB308": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/NeSykMZQsnFQudKP.gif",
  "#EA580C": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/AfeYmHkHwLrwLtUm.gif",
  "#16A34A": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/vPeFKPoYPLGvWtEA.gif",
  "#6B21A8": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/AZJkdRtbKFKtbaMF.gif",
  "#5C2D0E": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/brYAZCwoCarUSjbx.gif",
  "#000000": "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/zuhNScrjPkEVyWMt.gif",
};

export function JudocaSVG({ beltColor, beltName }: JudocaSVGProps) {
  const [visible, setVisible] = useState(true);
  const [currentGif, setCurrentGif] = useState(BELT_GIFS[beltColor] ?? BELT_GIFS["#E5E7EB"]);

  const isLight = beltColor === "#E5E7EB" || beltColor === "#EAB308";

  useEffect(() => {
    const newGif = BELT_GIFS[beltColor] ?? BELT_GIFS["#E5E7EB"];
    if (newGif === currentGif) return;

    // Fade out → troca → fade in
    setVisible(false);
    const timer = setTimeout(() => {
      setCurrentGif(newGif);
      setVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [beltColor]);

  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={currentGif}
        alt={`Quimono de judô com ${beltName}`}
        className="w-44 h-44 object-contain"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Badge da faixa */}
      <div
        className="px-5 py-1.5 rounded-full text-sm font-semibold shadow-sm tracking-wide"
        style={{
          backgroundColor: beltColor,
          color: isLight ? "#374151" : "white",
          transition: "background-color 0.3s ease, color 0.3s ease",
          border: isLight ? "1px solid #d1d5db" : "none",
        }}
      >
        {beltName}
      </div>
    </div>
  );
}
