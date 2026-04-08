/**
 * JudocaSVG — Ilustração vetorial de um judoca com quimono
 * A cor da faixa é controlada pela prop `beltColor`
 * Ao trocar a prop, a faixa muda com transição suave via CSS
 */

interface JudocaSVGProps {
  beltColor: string;
  beltName: string;
}

export function JudocaSVG({ beltColor, beltName }: JudocaSVGProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        viewBox="0 0 160 280"
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-auto drop-shadow-lg"
        aria-label={`Judoca com ${beltName}`}
      >
        {/* === CABEÇA === */}
        {/* Pescoço */}
        <rect x="72" y="52" width="16" height="14" rx="4" fill="#D4A574" />
        {/* Cabeça */}
        <ellipse cx="80" cy="38" rx="20" ry="22" fill="#D4A574" />
        {/* Cabelo */}
        <ellipse cx="80" cy="20" rx="20" ry="10" fill="#1a1a1a" />
        <rect x="60" y="18" width="40" height="10" fill="#1a1a1a" />
        {/* Olhos */}
        <ellipse cx="73" cy="37" rx="3" ry="3.5" fill="#1a1a1a" />
        <ellipse cx="87" cy="37" rx="3" ry="3.5" fill="#1a1a1a" />
        {/* Brilho olhos */}
        <circle cx="74.2" cy="35.5" r="1" fill="white" />
        <circle cx="88.2" cy="35.5" r="1" fill="white" />
        {/* Nariz */}
        <ellipse cx="80" cy="43" rx="2" ry="1.5" fill="#C4956A" />
        {/* Boca */}
        <path d="M75 48 Q80 52 85 48" stroke="#8B6347" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Orelhas */}
        <ellipse cx="60" cy="38" rx="4" ry="5" fill="#D4A574" />
        <ellipse cx="100" cy="38" rx="4" ry="5" fill="#D4A574" />

        {/* === QUIMONO — CORPO === */}
        {/* Corpo principal do quimono (branco) */}
        <path
          d="M45 66 L55 62 L80 68 L105 62 L115 66 L118 140 L42 140 Z"
          fill="white"
          stroke="#d0d0d0"
          strokeWidth="1"
        />

        {/* Lapela esquerda do quimono */}
        <path
          d="M80 68 L55 62 L48 140 L72 140 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />
        {/* Lapela direita do quimono */}
        <path
          d="M80 68 L105 62 L112 140 L88 140 Z"
          fill="#f0f0f0"
          stroke="#d0d0d0"
          strokeWidth="0.5"
        />

        {/* Abertura do quimono (V-neck) */}
        <path
          d="M80 68 L68 100 L80 108 L92 100 Z"
          fill="#D4A574"
        />

        {/* === FAIXA === com transição de cor */}
        <g style={{ transition: "all 0.4s ease" }}>
          {/* Corpo da faixa */}
          <rect
            x="42"
            y="128"
            width="76"
            height="14"
            rx="3"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Nó da faixa — lado esquerdo pendente */}
          <rect
            x="30"
            y="130"
            width="18"
            height="10"
            rx="2"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Nó da faixa — lado direito pendente */}
          <rect
            x="112"
            y="130"
            width="18"
            height="10"
            rx="2"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Nó central */}
          <rect
            x="70"
            y="127"
            width="20"
            height="16"
            rx="3"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Detalhe do nó */}
          <rect
            x="73"
            y="130"
            width="14"
            height="10"
            rx="2"
            fill={beltColor === "#E5E7EB" ? "#d0d0d0" : "rgba(0,0,0,0.15)"}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Linha de textura na faixa */}
          <line x1="42" y1="135" x2="118" y2="135" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
        </g>

        {/* === MANGAS === */}
        {/* Manga esquerda */}
        <path
          d="M45 66 L28 72 L22 110 L38 114 L48 82 Z"
          fill="white"
          stroke="#d0d0d0"
          strokeWidth="1"
        />
        {/* Punho esquerdo */}
        <ellipse cx="24" cy="112" rx="8" ry="5" fill="#D4A574" />

        {/* Manga direita */}
        <path
          d="M115 66 L132 72 L138 110 L122 114 L112 82 Z"
          fill="white"
          stroke="#d0d0d0"
          strokeWidth="1"
        />
        {/* Punho direito */}
        <ellipse cx="136" cy="112" rx="8" ry="5" fill="#D4A574" />

        {/* === CALÇA === */}
        {/* Calça esquerda */}
        <path
          d="M48 140 L42 220 L62 222 L72 165 L80 165 Z"
          fill="white"
          stroke="#d0d0d0"
          strokeWidth="1"
        />
        {/* Calça direita */}
        <path
          d="M112 140 L118 220 L98 222 L88 165 L80 165 Z"
          fill="white"
          stroke="#d0d0d0"
          strokeWidth="1"
        />
        {/* Divisória calça */}
        <line x1="80" y1="140" x2="80" y2="222" stroke="#d0d0d0" strokeWidth="1" />

        {/* === PÉS === */}
        {/* Pé esquerdo */}
        <ellipse cx="52" cy="224" rx="14" ry="6" fill="#D4A574" />
        {/* Pé direito */}
        <ellipse cx="108" cy="224" rx="14" ry="6" fill="#D4A574" />

        {/* === DETALHES DO QUIMONO === */}
        {/* Costuras laterais */}
        <line x1="48" y1="80" x2="45" y2="140" stroke="#d0d0d0" strokeWidth="0.8" strokeDasharray="3,2" />
        <line x1="112" y1="80" x2="115" y2="140" stroke="#d0d0d0" strokeWidth="0.8" strokeDasharray="3,2" />
      </svg>

      {/* Label da faixa */}
      <div
        className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-400 shadow-sm"
        style={{
          backgroundColor: beltColor,
          color: beltColor === "#E5E7EB" || beltColor === "#EAB308" ? "#374151" : "white",
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        {beltName}
      </div>
    </div>
  );
}
