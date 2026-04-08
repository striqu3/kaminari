/**
 * JudocaSVG — Ilustração vetorial minimalista de um judoca adulto
 * Estilo: silhueta sóbria, traços limpos, sem feições infantis
 * A cor da faixa é controlada pela prop `beltColor`
 */

interface JudocaSVGProps {
  beltColor: string;
  beltName: string;
}

export function JudocaSVG({ beltColor, beltName }: JudocaSVGProps) {
  const isLight = beltColor === "#E5E7EB" || beltColor === "#EAB308";

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 120 300"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-auto"
        aria-label={`Judoca com ${beltName}`}
      >
        {/* ── CABEÇA ── */}
        <ellipse cx="60" cy="28" rx="16" ry="18" fill="#C8956C" />
        {/* Cabelo curto — topo */}
        <path d="M44 22 Q60 8 76 22 Q76 14 60 10 Q44 14 44 22Z" fill="#1a1a1a" />
        {/* Pescoço */}
        <rect x="54" y="44" width="12" height="10" rx="3" fill="#C8956C" />

        {/* ── QUIMONO — TORSO ── */}
        {/* Corpo principal */}
        <path
          d="M32 54 L38 50 L60 56 L82 50 L88 54 L90 130 L30 130 Z"
          fill="#f8f8f8"
          stroke="#ccc"
          strokeWidth="0.8"
        />
        {/* Lapela esquerda */}
        <path
          d="M60 56 L38 50 L34 130 L58 130 Z"
          fill="#efefef"
          stroke="#ccc"
          strokeWidth="0.5"
        />
        {/* Lapela direita */}
        <path
          d="M60 56 L82 50 L86 130 L62 130 Z"
          fill="#efefef"
          stroke="#ccc"
          strokeWidth="0.5"
        />
        {/* Abertura V do quimono — pele visível */}
        <path d="M60 56 L52 88 L60 96 L68 88 Z" fill="#C8956C" />
        {/* Linha central do quimono */}
        <line x1="60" y1="56" x2="60" y2="130" stroke="#ddd" strokeWidth="0.6" />

        {/* ── FAIXA ── */}
        <g style={{ transition: "all 0.4s ease" }}>
          {/* Corpo da faixa */}
          <rect
            x="30" y="120" width="60" height="12" rx="2"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Ponta esquerda */}
          <rect
            x="18" y="122" width="16" height="8" rx="1.5"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Ponta direita */}
          <rect
            x="86" y="122" width="16" height="8" rx="1.5"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Nó central */}
          <rect
            x="52" y="119" width="16" height="14" rx="2"
            fill={beltColor}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Sombra do nó */}
          <rect
            x="55" y="122" width="10" height="8" rx="1.5"
            fill={isLight ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.2)"}
            style={{ transition: "fill 0.4s ease" }}
          />
          {/* Linha de textura */}
          <line x1="30" y1="126" x2="90" y2="126" stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.1)"} strokeWidth="0.8" />
        </g>

        {/* ── MANGAS ── */}
        {/* Manga esquerda */}
        <path
          d="M32 54 L18 62 L14 100 L28 103 L36 72 Z"
          fill="#f8f8f8"
          stroke="#ccc"
          strokeWidth="0.8"
        />
        {/* Antebraço esquerdo */}
        <path d="M14 100 L20 118 L30 115 L28 103 Z" fill="#C8956C" />
        {/* Mão esquerda */}
        <ellipse cx="21" cy="120" rx="6" ry="4" fill="#C8956C" />

        {/* Manga direita */}
        <path
          d="M88 54 L102 62 L106 100 L92 103 L84 72 Z"
          fill="#f8f8f8"
          stroke="#ccc"
          strokeWidth="0.8"
        />
        {/* Antebraço direito */}
        <path d="M106 100 L100 118 L90 115 L92 103 Z" fill="#C8956C" />
        {/* Mão direita */}
        <ellipse cx="99" cy="120" rx="6" ry="4" fill="#C8956C" />

        {/* ── CALÇA ── */}
        {/* Calça esquerda */}
        <path
          d="M30 130 L26 220 L48 222 L58 162 L60 162 Z"
          fill="#f8f8f8"
          stroke="#ccc"
          strokeWidth="0.8"
        />
        {/* Calça direita */}
        <path
          d="M90 130 L94 220 L72 222 L62 162 L60 162 Z"
          fill="#f8f8f8"
          stroke="#ccc"
          strokeWidth="0.8"
        />
        {/* Divisória calça */}
        <line x1="60" y1="130" x2="60" y2="222" stroke="#ddd" strokeWidth="0.8" />

        {/* ── PÉS ── */}
        <ellipse cx="37" cy="224" rx="13" ry="5" fill="#C8956C" />
        <ellipse cx="83" cy="224" rx="13" ry="5" fill="#C8956C" />

        {/* ── DETALHES QUIMONO ── */}
        {/* Costuras laterais sutis */}
        <line x1="36" y1="68" x2="32" y2="130" stroke="#ddd" strokeWidth="0.6" strokeDasharray="3,3" />
        <line x1="84" y1="68" x2="88" y2="130" stroke="#ddd" strokeWidth="0.6" strokeDasharray="3,3" />
      </svg>

      {/* Badge da faixa selecionada */}
      <div
        className="px-5 py-1.5 rounded-full text-sm font-semibold shadow-sm tracking-wide"
        style={{
          backgroundColor: beltColor,
          color: isLight ? "#374151" : "white",
          transition: "background-color 0.4s ease, color 0.4s ease",
          border: isLight ? "1px solid #d1d5db" : "none",
        }}
      >
        {beltName}
      </div>
    </div>
  );
}
