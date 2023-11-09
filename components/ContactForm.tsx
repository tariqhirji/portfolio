"use client";
import { FormEventHandler, useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Make API call and clear form
    alert(name + " " + email + " " + message);
  };

  return (
    <div className="w-full md:max-w-[700px]">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Name"
          placeholder="Billy Bob"
          value={name}
          setValue={setName}
        />
        <FormInput
          type="email"
          label="Email"
          placeholder="Billybob@outlook.com"
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
        <Button variant="btn_blue" text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
