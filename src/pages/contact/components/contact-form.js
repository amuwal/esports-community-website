import styled from "styled-components";

export default function ContactForm() {
  return (
    <>
      <div className="flex flex-col gap-[20px] flex-grow">
        <ContactInput placeholder="Name" />
        <ContactInput placeholder="Email" />
        <ContactInput placeholder="Phone" />
        <ContactInput placeholder="Anythin you want to tell us here" />
        <SubmitButton>Submit Now</SubmitButton>
      </div>
    </>
  );
}

const ContactInput = styled.input`
  outline: none;
  color: white;
  border: 2px solid black;
  padding: 10px 12px;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  background-color: #282828;
`;
