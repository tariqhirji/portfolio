import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import Image from "next/image";
import ContactImage from "@/public/contact.svg";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 flex bg-secondary">
      <div className="sectionContainer flex flex-col gap-14 justify-between">
        {/* Headings */}
        <div className="flex flex-col">
          <h1 className="sectionHeading">Think we would make a good team?</h1>
          <h2 className="sectionSubheading">
            Send me an email at tariqhirji@gmail.com or message me using the
            form below.
          </h2>
        </div>

        {/* Form + Picture */}
        <div className="flex items-center h-full justify-between flex-col md:flex-row mb-4">
          <ContactForm />
          <Image
            src={ContactImage}
            alt="tariq"
            width={500}
            height={500}
            className="hidden md:flex"
          />
        </div>

        {/* Contact Page Footer */}
        <div className="flex justify-center mb-4">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Contact;
