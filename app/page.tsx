import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import Dores from "@/components/sections/Dores";
import Virada from "@/components/sections/Virada";
import Apresentacao from "@/components/sections/Apresentacao";
import Entrega from "@/components/sections/Entrega";
import Chaves from "@/components/sections/Chaves";
import ComoFunciona from "@/components/sections/ComoFunciona";
import SobreTiago from "@/components/sections/SobreTiago";
import ParaQuem from "@/components/sections/ParaQuem";
import Oferta from "@/components/sections/Oferta";
import Garantia from "@/components/sections/Garantia";
import Faq from "@/components/sections/Faq";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";
import StickyCta from "@/components/sections/StickyCta";

export default function Page() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <div id="hero-end" aria-hidden="true" />
        <Dores />
        <Virada />
        <Apresentacao />
        <Entrega />
        <Chaves />
        <ComoFunciona />
        <SobreTiago />
        <ParaQuem />
        <Oferta />
        <Garantia />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      {/* Espaço para a barra fixa de CTA não cobrir o rodapé no mobile */}
      <div aria-hidden="true" className="h-[76px] md:hidden" />
      <StickyCta />
    </>
  );
}
