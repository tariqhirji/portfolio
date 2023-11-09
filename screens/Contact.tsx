import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 flex bg-[#E5E8F0]">
      <div className="container mx-auto flex flex-col gap-14 justify-between px-4">
        {/* Headings */}
        <div className="flex flex-col gap-14">
          <h1 className="pt-12 md:pt-16 w-full">
            Think we would make a good team?
          </h1>
          <h2>
            Send me an email at tariqhirji@gmail.com or message me using the
            form below.
          </h2>
        </div>

        {/* Form + Picture */}
        <div className="flex items-center h-full justify-between">
          <ContactForm />
          <ContactForm />
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
