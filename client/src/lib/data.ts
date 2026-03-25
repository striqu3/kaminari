// ============================================
// DADOS DO SITE KAMINARI - EDITE AQUI
// ============================================

// --- Galeria de Fotos ---
// Para adicionar fotos: coloque o arquivo em client/public/galeria/
// e adicione um novo item nesta lista seguindo o mesmo padrão.
// Para remover: apague o item da lista (e o arquivo da pasta, se quiser).

export interface GaleriaFoto {
  src: string;       // Caminho relativo a partir da raiz do site
  alt: string;       // Descrição da foto (importante para SEO e acessibilidade)
  orientacao: "paisagem" | "retrato"; // Define o tamanho no grid masonry
}

export const GALERIA_FOTOS: GaleriaFoto[] = [
  { src: "/galeria/foto-01.jpg", alt: "Treino de judô na academia Kaminari", orientacao: "paisagem" },
  { src: "/galeria/foto-02.jpg", alt: "Alunos praticando judô no tatame", orientacao: "paisagem" },
  { src: "/galeria/foto-03.jpg", alt: "Técnica de judô - posição vertical", orientacao: "retrato" },
  { src: "/galeria/foto-04.jpg", alt: "Treino coletivo na academia Kaminari", orientacao: "paisagem" },
  { src: "/galeria/foto-05.jpg", alt: "Judô Kaminari - treino de combate", orientacao: "paisagem" },
  { src: "/galeria/foto-06.jpg", alt: "Alunos em treino de judô", orientacao: "paisagem" },
  { src: "/galeria/foto-07.jpg", alt: "Treino de judô - técnicas de projeção", orientacao: "paisagem" },
  { src: "/galeria/foto-08.jpg", alt: "Academia Kaminari - treino em grupo", orientacao: "paisagem" },
  { src: "/galeria/foto-09.jpg", alt: "Judô Kaminari - competição e treino", orientacao: "paisagem" },
  { src: "/galeria/foto-10.jpg", alt: "Técnica de judô - posição vertical", orientacao: "retrato" },
  { src: "/galeria/foto-11.jpg", alt: "Treino de judô na academia", orientacao: "paisagem" },
  { src: "/galeria/foto-12.jpg", alt: "Alunos praticando judô", orientacao: "paisagem" },
  { src: "/galeria/foto-13.jpg", alt: "Judô Kaminari - treino e dedicação", orientacao: "paisagem" },
  { src: "/galeria/foto-14.jpg", alt: "Academia Kaminari - formação de atletas", orientacao: "paisagem" },
];
