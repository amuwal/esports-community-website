import Footer from "../../shared/components/Footer/index.js";
import Header from "../../shared/components/Header/index.js";
import ContactForm from "./components/contact-form.js";
import styled from "styled-components";
import ContactInfo from "./components/contact-info.js";

const onSubmit = async (formData) => {
  console.log(formData);
};

export default function Contact() {
  return (
    <>
      <Header />
      <TopSection>get in touch</TopSection>
      <MidSection>
        <ContactForm onSubmit={onSubmit} />
        <ContactInfo />
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
  flex-direction: column;
  align-items: center;
  margin: 0 80px;
  align-items: center;
  gap: 40px;
`;
