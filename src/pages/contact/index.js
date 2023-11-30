import Footer from "../../shared/components/Footer/index.js";
import Header from "../../shared/components/Header/index.js";
import ContactForm from "./components/contact-form.js";
import styled from "styled-components";
import ContactInfo from "./components/contact-info.js";
export default function Contact() {
  return (
    <>
      <Header />
      <TopSection>get in touch</TopSection>
      <MidSection>
        <ContactInfo />
        <ContactForm />
      </MidSection>
      <Footer />
    </>
  );
}

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 300px;
  font-size: 28px;
  font-weight: bolder;
  text-transform: uppercase;
`;

const MidSection = styled.div`
  display: flex;
  margin: 0 80px;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
`;
