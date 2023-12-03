import Footer from "../../shared/components/Footer/index.js";
import Header from "../../shared/components/Header/index.js";
import FeaturedSection from "./components/featured-section.js";
import PastEventsSection from "./components/past-events.js";
import TopSection from "./components/top-section.js";

export default function Events() {
  return (
    <>
      <Header />
      <TopSection />
      <FeaturedSection />
      <PastEventsSection />
      <Footer />
    </>
  );
}
