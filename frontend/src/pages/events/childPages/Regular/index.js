import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../api.js";
import TopSection from "./components/top-section";
import Header from "../../../../shared/components/Header";
import Footer from "../../../../shared/components/Footer";
import MidSection from "./components/mid-section";

export default function RegularEventDetails() {
  const { event_id } = useParams();
  console.log(event_id);
  const [event, setEvent] = useState([]);

  const populateEvent = async () => {
    setEvent(await getEventById(event_id));
  };

  useEffect(() => {
    populateEvent();
  }, []);

  return (
    <>
      <Header />
      <div>
        <TopSection event={event} />
        <MidSection event={event} />
      </div>
      <Footer />
    </>
  );
}
