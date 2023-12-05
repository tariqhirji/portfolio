"use client";
import { FormEventHandler, useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Make API call and clear form
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAIL_ID!
      )
      .then((result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        alert("Message successfully sent!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error! Please email me at tariqhirji@gmail.com and let me know");
      });
  };

  return (
    <div className="w-full md:max-w-[700px]">
      <form onSubmit={handleSubmit} className="w-full">
        <FormInput
          type="text"
          label="Name"
          placeholder="Your Name"
          value={name}
          setValue={setName}
        />
        <FormInput
          type="email"
          label="Email"
          placeholder="You@email.com"
          value={email}
          setValue={setEmail}
        />
        <FormInput
          type="textarea"
          label="Message"
          placeholder="I'd like your help with..."
          value={message}
          setValue={setMessage}
        />
        <div className="w-full">
          <Button
            isDisabled={false}
            text="Send Message"
            type="submit"
            fullWidth={true}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
