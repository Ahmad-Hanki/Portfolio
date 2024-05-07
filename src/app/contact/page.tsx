import { Metadata } from "next";
import ContactClient from "./_components/ContactClient"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me by sending me an E-mail",
};


const ContactPage = () => {
  return (
    <div>
        <ContactClient />
    </div>
  )
}

export default ContactPage