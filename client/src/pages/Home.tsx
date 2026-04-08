import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, MessageCircle, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { GaleriaLightbox } from "@/components/GaleriaLightbox";
import { JudocaSVG } from "@/components/JudocaSVG";

/**
 * Design System: Minimalismo Japonês Contemporâneo com Rosa/Coral
 * Cores: Rosa/Coral (Kaminari), preto profundo, branco puro
 * Tipografia: Playfair Display (títulos), Inter (corpo)
 * Layout: Assimétrico com espaço respirável
 * Logo: Integrada no header com destaque
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedBelt, setSelectedBelt] = useState({ cor: "#E5E7EB", nome: "Faixa Branca" });

  // Smooth scroll para seções
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Botão WhatsApp flutuante
  const whatsappLink = "https://wa.me/5541999987679929?text=Olá,%20gostaria%20de%20informações%20sobre%20as%20aulas%20de%20judô";

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/LqrbjIooixVKrHNX.jpeg"
              alt="Judô Kaminari - Academia de Judô"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-black">Judô Kaminari</h1>
              <p className="text-xs text-gray-600">Academia de Judô</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-black hover:text-rose-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-black hover:text-rose-500 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-black hover:text-rose-500 transition-colors font-medium"
            >
              História
            </button>
            <button
              onClick={() => scrollToSection("aulas")}
              className="text-black hover:text-rose-500 transition-colors font-medium"
            >
              Aulas
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-black hover:text-rose-500 transition-colors font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-black hover:text-rose-500 transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-black hover:text-rose-500 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-black hover:text-rose-500 transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("historia")}
                className="text-black hover:text-rose-500 transition-colors font-medium text-left"
              >
                História
              </button>
              <button
                onClick={() => scrollToSection("aulas")}
                className="text-black hover:text-rose-500 transition-colors font-medium text-left"
              >
                Aulas
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-black hover:text-rose-500 transition-colors font-medium text-left"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-black hover:text-rose-500 transition-colors font-medium text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Judô Kaminari
              </h1>
              <p className="text-2xl md:text-3xl text-rose-500 font-semibold">
                Disciplina, Respeito e Superação
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Bem-vindo à Judô Kaminari, onde ensinamos mais que técnicas. Aqui você desenvolve disciplina, respeito e superação pessoal através das artes marciais tradicionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("aulas")}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg"
              >
                Agende uma Aula Experimental
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeMRNwI2-7QNHVNXJNNIXSueY-7YY7MN2uqg13rNoV4UDDsNA/viewform?pli=1",
                    "_blank"
                  )
                }
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg"
              >
                Inscreva-se
              </button>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="hidden md:block">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663421895232/95jDM6ztxDZcobn8oqCuag/judo-hero-banner-L6v27DZEjzWGnShzmJcrhJ.webp"
              alt="Treino de Judô"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              Sobre a Judô Kaminari
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Disciplina</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ensinamos a importância da disciplina através do treinamento consistente e dedicado. Cada movimento, cada técnica é aprendida com foco e comprometimento.
                  </p>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Respeito</h3>
                  <p className="text-gray-700 leading-relaxed">
                    O respeito ao próximo, aos mestres e a si mesmo é fundamental no judô. Cultivamos uma comunidade onde todos são valorizados e apoiados.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Desenvolvimento Físico e Mental</h3>
                  <p className="text-gray-700 leading-relaxed">
                    O judô desenvolve força, flexibilidade, equilíbrio e coordenação. Além disso, fortalece a mente, aumenta a confiança e melhora a saúde mental.
                  </p>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Formação de Atletas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Preparamos nossos alunos para competições, desenvolvendo técnicas avançadas e estratégias de combate para aqueles que desejam competir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História Section - V2: Parallax + Citação + Cards */}
      <section id="historia" className="bg-white">

        {/* Bloco 1: Parallax Hero com citação central */}
        <div
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/IpgOsSvnnCCTxyAa.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-rose-400 text-sm font-semibold tracking-[0.3em] uppercase mb-8">Uma herança de gerações</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
              A História do<br />
              <span className="text-rose-400">Judô Kaminari</span>
            </h2>
            <blockquote className="text-xl md:text-2xl text-gray-200 italic leading-relaxed border-t border-b border-rose-500/40 py-8">
              &ldquo;Mais do que golpes e técnicas, ensinam respeito, superação e caráter — mantendo viva uma história que começou em família e que continua transformando vidas.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Bloco 2: Narrativa em cards sobre fundo branco */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* Intro */}
            <p className="text-xl text-gray-600 text-center leading-relaxed mb-16 max-w-3xl mx-auto">
              A história do Judô Kaminari começa dentro de casa, entre irmãos, sonhos e a influência marcante de um avô.
            </p>

            {/* Cards da linhagem - horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

              {/* Card 1 - Origem */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">柔</span>
                  </div>
                  <div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase">A Origem</p>
                    <h3 className="text-black text-xl font-bold">Uma linhagem direta</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  O sensei Sakamoto carregava consigo uma história grandiosa. Pioneiro do judô no Paraná, foi aluno do sensei Sadai Ishihara, que por sua vez teve a honra de aprender diretamente com <strong>Jigoro Kano</strong>, o criador do judô.
                </p>
              </div>

              {/* Card 2 - Herança */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">先</span>
                  </div>
                  <div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase">A Herança</p>
                    <h3 className="text-black text-xl font-bold">Sensei Hiromitsu Sakamoto</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Essa conexão direta com a essência da modalidade transformou o aprendizado dos irmãos em algo ainda mais especial — uma verdadeira herança transmitida com valores que moldariam não apenas atletas, mas pessoas.
                </p>
              </div>

              {/* Card 3 - Conquistas */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">雷</span>
                  </div>
                  <div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase">As Conquistas</p>
                    <h3 className="text-black text-xl font-bold">Campeões Estaduais e Nacionais</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Com dedicação, disciplina e paixão, <strong>Marcelo Yu</strong>, <strong>Victor Koudi</strong> e <strong>Matheus Takashi Kaminari</strong> trilharam um caminho de conquistas, acumulando títulos ao longo de toda a sua jornada como atletas.
                </p>
              </div>

              {/* Card 4 - Propósito */}
              <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-600 font-bold text-lg">心</span>
                  </div>
                  <div>
                    <p className="text-rose-400 text-xs font-semibold tracking-widest uppercase">O Propósito</p>
                    <h3 className="text-white text-xl font-bold">Ensinar é o legado</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Ao final de suas carreiras competitivas, os senseis Yu e Koudi escolheram continuar no tatame por um propósito maior: ensinar. Hoje, formam novas gerações mantendo viva uma história que começou em família.
                </p>
              </div>
            </div>

            {/* Linha do Tempo Horizontal - Linhagem */}
            <div className="mt-4 mb-4">
              <h3 className="text-center text-2xl font-bold text-black mb-3">A Linhagem</h3>
              <p className="text-center text-gray-500 mb-12">Uma conexão direta com o criador do judô</p>

              <div className="relative">
                {/* Linha conectora */}
                <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-rose-300" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                  {/* Nó 1 - Jigoro Kano */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-rose-500 border-4 border-white shadow-lg shadow-rose-200 flex items-center justify-center mb-4">
                      <span className="text-white font-bold">柔</span>
                    </div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase mb-1">O Fundador</p>
                    <h4 className="text-black font-bold text-base mb-2">Jigoro Kano</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Criador do judô moderno e pai de todos os senseis que vieram depois</p>
                  </div>

                  {/* Nó 2 - Sensei Ishihara */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-rose-500 border-4 border-white shadow-lg shadow-rose-200 flex items-center justify-center mb-4">
                      <span className="text-white font-bold">師</span>
                    </div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase mb-1">Discípulo Direto</p>
                    <h4 className="text-black font-bold text-base mb-2">Sensei Ishihara</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Aluno direto de Kano, transmitiu os ensinamentos originais com fidelidade</p>
                  </div>

                  {/* Nó 3 - Sensei Sakamoto */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-rose-500 border-4 border-white shadow-lg shadow-rose-200 flex items-center justify-center mb-4">
                      <span className="text-white font-bold">先</span>
                    </div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase mb-1">Pioneiro no Paraná</p>
                    <h4 className="text-black font-bold text-base mb-2">Sensei Sakamoto</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Trouxe o judô original ao Brasil e formou os irmãos Kaminari</p>
                  </div>

                  {/* Nó 4 - Irmãos Kaminari */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-black border-4 border-rose-400 shadow-lg shadow-rose-200 flex items-center justify-center mb-4">
                      <span className="text-white font-bold">雷</span>
                    </div>
                    <p className="text-rose-500 text-xs font-semibold tracking-widest uppercase mb-1">Hoje</p>
                    <h4 className="text-black font-bold text-base mb-2">Senseis Kaminari</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Yu, Koudi e Takashi — campeões que hoje formam a próxima geração</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Faixas Section */}
      <section id="faixas" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Progressão de Faixas</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No judô, cada faixa representa uma etapa de evolução técnica, física e filosófica.
              Clique em uma faixa para ver o judoca vesti-la.
            </p>
          </div>

          {/* Card de critérios */}
          {(() => {
            const criterios: Record<string, { carencia: string; grupos: { titulo: string; itens: string[] }[] }> = {
              "#E5E7EB": {
                carencia: "Faixa inicial — sem carência",
                grupos: [
                  { titulo: "Ukemis (Quedas)", itens: ["Ushiro-Ukemi", "Yoko-Ukemi", "Mae-Ukemi", "Mae-Maware-Ukemi"] },
                ],
              },
              "#9CA3AF": {
                carencia: "6 meses como Faixa Branca",
                grupos: [
                  { titulo: "Ukemis (Quedas)", itens: ["Ushiro-Ukemi", "Mae-Ukemi (joelhos)", "Mae-Mawari-Ukemi"] },
                  { titulo: "Rei-Ho (Saudação)", itens: ["Za-Rei", "Ritsu-Rei"] },
                  { titulo: "Shisei (Posturas)", itens: ["Seiza", "Agura"] },
                  { titulo: "Nage-Waza (Projeções)", itens: ["O-Soto-Gari", "Koshi-Guruma", "O-Uchi-Gari"] },
                  { titulo: "Osae-Waza (Imobilizações)", itens: ["Kesa-Gatame", "Tate-Shiho-Gatame"] },
                  { titulo: "Contagem", itens: ["Até 10 em japonês"] },
                ],
              },
              "#2563EB": {
                carencia: "6 meses como Faixa Cinza",
                grupos: [
                  { titulo: "Ukemis (Quedas)", itens: ["Ushiro-Ukemi", "Mae-Ukemi", "Yoko-Ukemi (deitado)", "Mae-Mawari-Ukemi"] },
                  { titulo: "Rei-Ho (Saudação)", itens: ["Za-Rei", "Ritsu-Rei"] },
                  { titulo: "Shisei (Posturas)", itens: ["Seiza", "Agura"] },
                  { titulo: "Nage-Waza (Projeções)", itens: ["O-Soto-Gari", "Koshi-Guruma", "O-Uchi-Gari", "Ippon-Seoi-Nage", "O-Goshi"] },
                  { titulo: "Osae-Waza (Imobilizações)", itens: ["Kesa-Gatame", "Tate-Shiho-Gatame", "Yoko-Shiho-Gatame"] },
                  { titulo: "Contagem", itens: ["Até 20 em japonês"] },
                ],
              },
              "#EAB308": {
                carencia: "6 meses como Faixa Azul",
                grupos: [
                  { titulo: "Ukemis (Quedas)", itens: ["Ushiro-Ukemi (2x)", "Mae-Ukemi (2x)", "Yoko-Ukemi (2x)", "Mae-Mawari-Ukemi"] },
                  { titulo: "Rei-Ho e Shisei", itens: ["Za-Rei / Ritsu-Rei", "Seiza / Agura / Shizen-Tai / Jigo-Tai"] },
                  { titulo: "Nage-Waza (Projeções)", itens: ["O-Soto-Gari", "Koshi-Guruma", "O-Uchi-Gari", "Ippon-Seoi-Nage", "O-Goshi", "Ko-Soto-Gake", "Seoi-Nage"] },
                  { titulo: "Osae-Waza (Imobilizações)", itens: ["Kesa-Gatame", "Tate-Shiho-Gatame", "Yoko-Shiho-Gatame", "Kami-Shiho-Gatame"] },
                  { titulo: "Contagem", itens: ["Até 30 em japonês"] },
                ],
              },
              "#EA580C": {
                carencia: "1 ano como Faixa Amarela",
                grupos: [
                  { titulo: "Programa da Faixa Amarela +", itens: ["Todos os requisitos da faixa anterior"] },
                  { titulo: "Tai Sabaki (Movimentação)", itens: ["Migui-Ashi-Mae-Sabaki", "Hidari-Ashi-Mae-Sabaki", "Migui-Ashi-Mae-Mawari-Sabaki", "Hidari-Ashi-Mae-Mawari-Sabaki"] },
                  { titulo: "Nage-Waza (Projeções novas)", itens: ["Harai-Goshi", "Tai-Otoshi", "De-Ashi-Harai", "Ko-Uchi-Gari"] },
                  { titulo: "Osae-Waza (Imobilizações novas)", itens: ["Kuzure-Kesa-Gatame", "Ushiro-Kesa-Gatame"] },
                  { titulo: "Kaeshi-Waza (Contragolpes)", itens: ["3 técnicas"] },
                  { titulo: "Renraku-Henka-Waza (Sequências)", itens: ["3 técnicas"] },
                ],
              },
              "#16A34A": {
                carencia: "1 ano como Faixa Laranja",
                grupos: [
                  { titulo: "Nage-Waza (Projeções)", itens: ["Sasae-Tsurikomi-Ashi", "O-Soto-Guruma", "Uchi-Mata", "Hane-Goshi", "Tomoe-Nage"] },
                  { titulo: "Osae-Waza (Imobilizações)", itens: ["Kata-Gatame", "Uki-Gatame", "Ura-Gatame"] },
                  { titulo: "Shime-Waza (Estrangulamentos)", itens: ["Nami-Juji-Jime", "Kata-Juji-Jime", "Gyaku-Juji-Jime"] },
                  { titulo: "Kansetsu-Waza (Chaves)", itens: ["Ude-Garami", "Ude-Hishigi-Ude-Gatame", "Ude-Hishigi-Juji-Gatame"] },
                  { titulo: "Kaeshi-Waza", itens: ["5 técnicas"] },
                  { titulo: "Renraku-Henka-Waza", itens: ["5 técnicas"] },
                ],
              },
              "#6B21A8": {
                carencia: "1 ano como Faixa Verde",
                grupos: [
                  { titulo: "Nage-Waza (Projeções)", itens: ["Hiza-Guruma", "Uki-Goshi", "Ko-Soto-Gari", "Tsurikomi-Goshi", "Okuri-Ashi-Harai"] },
                  { titulo: "Osae-Waza", itens: ["Osae-Waza completo"] },
                  { titulo: "Shime-Waza (Estrangulamentos)", itens: ["Nami-Juji-Jime", "Kata-Juji-Jime", "Gyaku-Juji-Jime", "Hadaka-Jime", "Okuri-Eri-Jime", "Kataha-Jime"] },
                  { titulo: "Kansetsu-Waza (Chaves)", itens: ["Ude-Garami", "Ude-Hishigi-Ude-Gatame", "Ude-Hishigi-Juji-Gatame", "Ude-Hishigi-Waki-Gatame", "Ude-Hishigi-Hara-Gatame", "Ude-Hishigi-Hiza-Gatame"] },
                  { titulo: "Kaeshi-Waza", itens: ["5 técnicas"] },
                  { titulo: "Renraku-Henka-Waza", itens: ["5 técnicas"] },
                ],
              },
              "#5C2D0E": {
                carencia: "1 ano como Faixa Roxa",
                grupos: [
                  { titulo: "Nage-Waza (Projeções)", itens: ["Tsuri-Goshi", "Yoko-Otoshi", "Ashi-Guruma", "Harai-Tsurikomi-Ashi", "Kata-Guruma", "Sumi-Gaeshi", "Tani-Otoshi", "Hane-Makikomi", "Sukui-Nage", "Utsuri-Goshi", "O-Guruma", "Soto-Makikomi", "Uki-Otoshi"] },
                  { titulo: "Osae-Waza", itens: ["Osae-Waza completo"] },
                  { titulo: "Shime-Waza (Estrangulamentos)", itens: ["Nami-Juji-Jime", "Kata-Juji-Jime", "Gyaku-Juji-Jime", "Hadaka-Jime", "Okuri-Eri-Jime", "Kataha-Jime", "Katate-Jime", "Ryote-Jime", "Tsukkomi-Jime"] },
                  { titulo: "Kansetsu-Waza (Chaves)", itens: ["Ude-Garami", "Ude-Hishigi-Ude-Gatame", "Ude-Hishigi-Juji-Gatame", "Ude-Hishigi-Waki-Gatame", "Ude-Hishigi-Hara-Gatame", "Ude-Hishigi-Hiza-Gatame", "Ude-Hishigi-Ashi-Gatame", "Ude-Hishigi-Te-Gatame", "Ude-Hishigi-Sankaku-Gatame"] },
                ],
              },
              "#000000": {
                carencia: "1 ano como Faixa Marrom + aprovação em exame",
                grupos: [
                  { titulo: "Nage-Waza", itens: ["Dominínio completo das técnicas de todas as faixas anteriores"] },
                  { titulo: "Katame-Waza", itens: ["Osae-Waza, Shime-Waza e Kansetsu-Waza completos"] },
                  { titulo: "Kaeshi e Renraku-Waza", itens: ["Domínio de contragolpes e sequências"] },
                  { titulo: "Exame teórico", itens: ["Histórico do Judô", "Filosofia e ética", "Vocabulário técnico"] },
                ],
              },
            };
            const c = criterios[selectedBelt.cor];
            if (!c) return null;
            const isDark = selectedBelt.cor !== "#E5E7EB" && selectedBelt.cor !== "#EAB308";
            return (
              <div
                key={selectedBelt.cor}
                className="max-w-3xl mx-auto mb-10 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                style={{ animation: "fadeInDown 0.35s ease both" }}
              >
                {/* Cabeçalho colorido */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ backgroundColor: selectedBelt.cor }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)" }}>Programa de Exame</p>
                    <span className="font-bold text-lg" style={{ color: isDark ? "white" : "#374151" }}>{selectedBelt.nome}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)" }}>Carência mínima</p>
                    <p className="text-sm font-medium" style={{ color: isDark ? "white" : "#374151" }}>{c.carencia}</p>
                  </div>
                </div>
                {/* Grupos de técnicas */}
                <div className="px-6 py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {c.grupos.map((g, gi) => (
                    <div key={gi}>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{g.titulo}</p>
                      <ul className="space-y-1">
                        {g.itens.map((item, ii) => (
                          <li key={ii} className="text-sm text-gray-700 flex gap-1.5">
                            <span className="text-gray-300 mt-0.5 flex-shrink-0">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-4xl mx-auto">

            {/* Grid 3x3 de cards de faixa */}
            <div className="w-full grid grid-cols-3 gap-3">
              {[
                { cor: "#000000", nome: "Preta", grau: "1º Dan", idade: "16 anos" },
                { cor: "#5C2D0E", nome: "Marrom", grau: "1º Kyû", idade: "14 anos" },
                { cor: "#6B21A8", nome: "Roxa", grau: "2º Kyû", idade: "13 anos" },
                { cor: "#16A34A", nome: "Verde", grau: "3º Kyû", idade: "12 anos" },
                { cor: "#EA580C", nome: "Laranja", grau: "4º Kyû", idade: "11 anos" },
                { cor: "#EAB308", nome: "Amarela", grau: "6º Kyû", idade: "9 anos" },
                { cor: "#2563EB", nome: "Azul", grau: "8º Kyû", idade: "7 anos" },
                { cor: "#9CA3AF", nome: "Cinza", grau: "10º Kyû", idade: "5 anos" },
                { cor: "#E5E7EB", nome: "Branca", grau: "Iniciante", idade: "4 anos", textDark: true },
              ].map((faixa, index) => {
                const isSelected = selectedBelt.cor === faixa.cor;
                return (
                  <button
                    key={faixa.nome}
                    onClick={() => setSelectedBelt({ cor: faixa.cor, nome: `Faixa ${faixa.nome}` })}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 bg-white text-center animate-fade-in"
                    style={{
                      borderColor: isSelected ? faixa.cor : "transparent",
                      boxShadow: isSelected ? `0 0 0 3px ${faixa.cor}22` : undefined,
                      animationDelay: `${index * 60}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Círculo colorido */}
                    <div
                      className="w-10 h-10 rounded-full border-2 border-gray-200 transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: faixa.cor }}
                    />
                    {/* Nome */}
                    <span className="text-xs font-semibold text-gray-800 leading-tight">{faixa.nome}</span>
                    {/* Idade */}
                    <span className="text-xs text-gray-400">{faixa.idade}</span>
                  </button>
                );
              })}
            </div>

            {/* Quimono + info — sticky no desktop */}
            <div className="lg:sticky lg:top-28 flex-shrink-0 flex flex-col items-center gap-3">
              <JudocaSVG beltColor={selectedBelt.cor} beltName={selectedBelt.nome} />
              <p className="text-center text-xs text-gray-400 max-w-[160px]">
                Clique em uma faixa para visualizar
              </p>
            </div>

          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Regulamento oficial da Confederação Brasileira de Judô (CBJ) — 2019
          </p>
        </div>
      </section>

      {/* Aulas Section */}
      <section id="aulas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
            Nossas Aulas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Judô Infantil */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/BxCFZzjWkidtfvaF.jpeg"
                alt="Turma de judô infantil com crianças pequenas na Academia Kaminari em Curitiba"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">Turma Kids</h3>
                <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide mb-2">4 a 7 anos</p>
                <p className="text-gray-700 mb-4">
                  Primeiro contato com o tatame. Desenvolvemos coordenação motora, equilíbrio e confiança através de brincadeiras e jogos inspirados no judô.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Coordenação e equilíbrio</li>
                  <li>✓ Jogos lúdicos e divertidos</li>
                  <li>✓ Disciplina desde cedo</li>
                </ul>
              </div>
            </Card>

            {/* Judô Juvenil */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/JSjrLtMaLIWKSMQJ.jpeg"
                alt="Turma de judô infantil de 7 a 12 anos na Academia Kaminari em Curitiba"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">Turma Infantil</h3>
                <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide mb-2">7 a 12 anos</p>
                <p className="text-gray-700 mb-4">
                  Técnicas fundamentais do judô com foco em desenvolvimento físico, respeito e espírito esportivo. Introdução gradual às competições.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Técnicas básicas e intermediárias</li>
                  <li>✓ Desenvolvimento físico e mental</li>
                  <li>✓ Primeiras competições</li>
                </ul>
              </div>
            </Card>

            {/* Judô Adulto */}
            <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029603399/kIipEDDqeyPzBTgE.webp"
                alt="Turma de judô a partir de 13 anos na Academia Kaminari em Curitiba"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">Turma Avançada</h3>
                <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide mb-2">13 anos em diante</p>
                <p className="text-gray-700 mb-4">
                  Treinamento sério para quem quer evoluir de verdade. Técnicas avançadas, condicionamento físico e preparação para competições regionais e nacionais.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Técnicas avançadas de arremesso e solo</li>
                  <li>✓ Condicionamento físico completo</li>
                  <li>✓ Competições e campeonatos</li>
                </ul>
              </div>
            </Card>


          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeMRNwI2-7QNHVNXJNNIXSueY-7YY7MN2uqg13rNoV4UDDsNA/viewform?pli=1",
                  "_blank"
                )
              }
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              Inscreva-se Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Judô Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
            O que é Judô?
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introdução */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                O <strong>judô</strong> (柔道) é uma arte marcial japonesa moderna que significa "o caminho da flexibilidade" ou "o caminho da gentileza". Criado em 1882 pelo mestre Jigoro Kano, o judô combina técnicas de combate com princípios filosóficos profundos, transformando-se em um esporte olímpico reconhecido mundialmente.
              </p>
              <p>
                Diferentemente de muitas artes marciais que enfatizam golpes de punho e chute, o judô concentra-se em técnicas de arremesso, imobilização e estrangulamento controlado, utilizando a força e o equilíbrio do oponente contra ele mesmo.
              </p>
            </div>

            {/* Princípios Fundamentais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
                <h3 className="text-2xl font-bold text-black mb-3">Jita Kyoei</h3>
                <p className="text-gray-700">
                  "Bem-estar mútuo e benefício comum". O princípio de que todos se ajudam para crescer juntos, tanto no tatame quanto na vida.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
                <h3 className="text-2xl font-bold text-black mb-3">Seiryoku Zenyo</h3>
                <p className="text-gray-700">
                  "Uso eficiente da energia". Aprender a usar a força mínima necessária para executar uma técnica, desenvolvendo eficiência máxima.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rose-500">
                <h3 className="text-2xl font-bold text-black mb-3">Rei (Respeito)</h3>
                <p className="text-gray-700">
                  O respeito é central no judô. Respeita-se o mestre, os companheiros, os adversários e a si mesmo através da disciplina.
                </p>
              </div>
            </div>

            {/* Técnicas Básicas */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-8 text-center">Técnicas Principais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-rose-500 mb-3">Nage Waza (Técnicas de Arremesso)</h4>
                  <p className="text-gray-700 mb-4">
                    As técnicas de arremesso são o coração do judô. O judoka aprende a usar a força, o equilíbrio e a mecânica corporal para derrotar o oponente.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Seoi Nage</strong> - Arremesso pelas costas</li>
                    <li>• <strong>O Goshi</strong> - Arremesso pela cintura</li>
                    <li>• <strong>Uchi Mata</strong> - Arremesso interno da coxa</li>
                    <li>• <strong>Tai Otoshi</strong> - Arremesso corporal</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-rose-500 mb-3">Katame Waza (Técnicas de Solo)</h4>
                  <p className="text-gray-700 mb-4">
                    Técnicas executadas quando o judoka está no solo, incluindo imobilizações e estrangulamentos controlados.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Osae Waza</strong> - Técnicas de imobilização</li>
                    <li>• <strong>Shime Waza</strong> - Técnicas de estrangulamento</li>
                    <li>• <strong>Kansetsu Waza</strong> - Técnicas de articulação</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-black mb-6 text-center">Benefícios do Judô</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="text-rose-500 text-2xl font-bold">💪</div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Desenvolvimento Físico</h4>
                    <p className="text-gray-700">Força, flexibilidade, resistência, coordenação e equilíbrio.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-rose-500 text-2xl font-bold">🧠</div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Desenvolvimento Mental</h4>
                    <p className="text-gray-700">Concentração, estratégia, confiança e autocontrole.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-rose-500 text-2xl font-bold">🤝</div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Habilidades Sociais</h4>
                    <p className="text-gray-700">Respeito, trabalho em equipe, amizade e comunidade.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-rose-500 text-2xl font-bold">🎯</div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Disciplina e Caráter</h4>
                    <p className="text-gray-700">Persistência, humildade, responsabilidade e integridade.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* História */}
            <div className="border-l-4 border-rose-500 pl-6">
              <h3 className="text-2xl font-bold text-black mb-4">História do Judô</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O judô foi criado em 1882 pelo professor Jigoro Kano, que combinou técnicas de várias escolas de jujutsu com princípios filosóficos. Kano acreditava que o judô deveria ser mais que um esporte - deveria ser um caminho de vida que desenvolvesse o caráter e contribuísse para a sociedade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Em 1964, o judô foi incluído nos Jogos Olímpicos de Tóquio, consolidando sua posição como um dos esportes mais importantes do mundo. Hoje, o judô é praticado em mais de 200 países por milhões de pessoas de todas as idades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Galeria
            </h2>
            <p className="text-gray-500 text-lg">Clique em qualquer foto para ampliar</p>
          </div>

          <GaleriaLightbox />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Siga-nos no Instagram para mais fotos, vídeos e novidades!
            </p>
            <Button
              onClick={() =>
                window.open("https://www.instagram.com/judokaminari/", "_blank")
              }
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg transition-all flex items-center gap-2 mx-auto font-semibold text-lg"
            >
              <Instagram size={24} />
              @judokaminari
            </Button>
          </div>
        </div>
      </section>


      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
            Contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-rose-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Endereço</h3>
                  <p className="text-gray-700">
                    Rua Gabriel Arns 26<br />
                    Curitiba – PR, Brasil<br />
                    CEP: 81570-300
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-rose-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Telefone</h3>
                  <p className="text-gray-700">
                    <a href="tel:+5541999987679929" className="hover:text-rose-500 transition-colors">
                      (41) 99987-6799
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-rose-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:judokaminari@gmail.com" className="hover:text-rose-500 transition-colors">
                      judokaminari@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/judokaminari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-lg transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/judokaminari/?locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-lg transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5234567890123!2d-49.3!3d-25.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4b4b4b4b4b5%3A0x1234567890abcdef!2sRua%20Gabriel%20Arns%2C%2026%20-%20Curitiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Judô Kaminari</h3>
              <p className="text-gray-400">
                Disciplina, Respeito e Superação
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-rose-500 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("sobre")} className="hover:text-rose-500 transition-colors">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("aulas")} className="hover:text-rose-500 transition-colors">
                    Aulas
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contato")} className="hover:text-rose-500 transition-colors">
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Inscrição</h3>
              <Button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeMRNwI2-7QNHVNXJNNIXSueY-7YY7MN2uqg13rNoV4UDDsNA/viewform?pli=1",
                    "_blank"
                  )
                }
                className="bg-rose-500 hover:bg-rose-600 text-white w-full"
              >
                Inscreva-se Agora
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Judô Kaminari. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:shadow-xl z-40 flex items-center justify-center"
        title="Enviar mensagem no WhatsApp"
      >
        {/* Ícone oficial WhatsApp */}
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
