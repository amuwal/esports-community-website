import Achievements from "../../shared/components/Achievements";
import Footer from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import AboutInfo from "./components/about-info";
import Team from "./components/team";
import TopSection from "./components/top-section";

export default function About() {
  return (
    <>
      <Header />
      <div className="mb-[200px]">
        <TopSection />
        <AboutInfo />
        <Achievements />
        <Team />
      </div>
      <Footer />
    </>
  );
}
