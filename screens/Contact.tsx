import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import Image from "next/image";
import ContactImage from "@/public/contact.svg";
import { CONTACT } from "@/constants";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 flex bg-secondary">
      <div className="sectionContainer flex flex-col gap-0 md:gap-14 justify-start md:justify-between">
        {/* Headings */}
        <div className="flex flex-col">
          <h1 className="sectionHeading">{CONTACT.title}</h1>
          <h2 className="sectionSubheading md:mt-10">
            {CONTACT.description}{" "}
            <a
              href="mailto:tariqhirji@gmail.com"
              className="text-blue animate-pulse hover:text-blue/60 hover:animate-none"
            >
              tariqhirji@gmail.com
            </a>
          </h2>
        </div>

        {/* row of Form + Picture */}
        <div className="flex items-center h-full md:justify-between flex-col md:flex-row mb-0 md:mb-6">
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
        <div className="flex justify-center pb-2 md:pb-4">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Contact;
