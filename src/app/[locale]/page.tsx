import Header from "@/components/LandingSections/Header";
import Services from "@/components/LandingSections/Services";
import Projects from "@/components/LandingSections/Projects";
import Contact from "@/components/LandingSections/Contact";
import Footer from "@/components/LandingSections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
