import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import Image from "next/image";
import ContactImage from "@/public/contact.svg";
import { CONTACT } from "@/constants";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 flex bg-secondary dark:bg-dark1">
      <div className="sectionContainer flex flex-col xl:gap-12 justify-start md:justify-between">
        {/* Headings */}
        <div className="flex flex-col">
          <h1 className="sectionHeading">{CONTACT.title}</h1>
          <h2 className="sectionSubheading xl:mt-8">
            {CONTACT.description}
            <a
              href="mailto:tariqhirji@gmail.com"
              className="text-blue animate-pulse hover:text-blue/60 hover:animate-none"
            >
              tariqhirji@gmail.com
            </a>
          </h2>
        </div>

        {/* row of Form + Picture */}
        <div className="flex items-center h-full md:justify-between flex-col lg:flex-row mb-0 md:mb-6">
          <ContactForm />
          <Image
            src={ContactImage}
            alt="Teamwork in action!"
            width={500}
            height={500}
            className="hidden md:flex md:mt-6 lg:ml-4"
          />
        </div>

        {/* Contact Page Footer */}
        <div className="justify-center pb-2 2xl:pb-4 hidden md:flex lg:hidden xl:flex">
          <Socials variant="socialIcon_white" shadowColor="shadow-gray" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
