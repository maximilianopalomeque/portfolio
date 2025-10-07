import Header from "@/components/LandingSections/Header";
import Services from "@/components/LandingSections/Services";
import TechStack from "@/components/LandingSections/TechStack";
import Experience from "@/components/LandingSections/Experience";
import Projects from "@/components/LandingSections/Projects";
import Contact from "@/components/LandingSections/Contact";
import Footer from "@/components/LandingSections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
