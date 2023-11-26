import Footer from "../../shared/components/Footer/index.js";
import Header from "../../shared/components/Header/index.js";
import Events from "./components/events.js";
import Stats from "./components/stats.js";

export default function Home() {
  return (
    <>
      <Header />
      <Stats />
      <Events />
      <Footer />
    </>
  );
}
