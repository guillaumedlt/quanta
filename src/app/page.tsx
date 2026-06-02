import Header from "@/components/Header";
import WhitePaperToast from "@/components/WhitePaperToast";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Expertise from "@/components/Expertise";
import Conviction from "@/components/Conviction";
import Method from "@/components/Method";
import Sectors from "@/components/Sectors";
import Results from "@/components/Results";
import Cabinet from "@/components/Cabinet";
import MonacoPresence from "@/components/MonacoPresence";
import TransformationApproach from "@/components/TransformationApproach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <TransformationApproach />
        <Conviction />
        <Expertise />
        <Method />
        <Sectors />
        <Results />
        <Cabinet />
        <MonacoPresence />
        <Contact />
      </main>
      <Footer />
      <WhitePaperToast />
    </>
  );
}
