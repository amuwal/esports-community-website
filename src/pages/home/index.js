import Achievements from "../../shared/components/Achievements/index.js";
import Footer from "../../shared/components/Footer/index.js";
import Header from "../../shared/components/Header/index.js";
import Events from "./components/events.js";

export default function Home() {
  return (
    <>
      <Header />
      <Achievements />
      <Events />
      <Footer />
    </>
  );
}
