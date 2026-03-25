import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALERIA_FOTOS } from "@/lib/data";

export function GaleriaLightbox() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const abrirFoto = (index: number) => setLightboxIndex(index);
  const fecharLightbox = () => setLightboxIndex(null);

  const irAnterior = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALERIA_FOTOS.length) % GALERIA_FOTOS.length);
  }, [lightboxIndex]);

  const irProxima = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALERIA_FOTOS.length);
  }, [lightboxIndex]);

  // Navegação por teclado
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") irAnterior();
      if (e.key === "ArrowRight") irProxima();
      if (e.key === "Escape") fecharLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, irAnterior, irProxima]);

  // Bloquear scroll quando lightbox aberto
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* Grid Masonry */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {GALERIA_FOTOS.map((foto, index) => (
          <div
            key={foto.src}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg group relative"
            onClick={() => abrirFoto(index)}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={fecharLightbox}
        >
          {/* Botão fechar */}
          <button
            className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={fecharLightbox}
          >
            <X size={24} />
          </button>

          {/* Contador */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {GALERIA_FOTOS.length}
          </div>

          {/* Botão anterior */}
          <button
            className="absolute left-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); irAnterior(); }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Imagem principal */}
          <div
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALERIA_FOTOS[lightboxIndex].src}
              alt={GALERIA_FOTOS[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Botão próxima */}
          <button
            className="absolute right-4 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); irProxima(); }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Miniaturas na parte inferior */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
            {GALERIA_FOTOS.map((foto, index) => (
              <button
                key={foto.src}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === lightboxIndex ? "border-rose-500 opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
