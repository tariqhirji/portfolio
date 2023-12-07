"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TYPEWRITER } from "@/constants";

const Typewritter = () => {
  const [text] = useTypewriter({
    words: TYPEWRITER.dynamicWords,
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <h1 className="font-shareTech text-writing2 dark:text-secondary">
      {TYPEWRITER.staticForeward}
      <span className="text-white dark:text-blue">
        <br className="block md:hidden lg:block xl:hidden" />
        {text}
      </span>
      <Cursor cursorColor="white" />

      <br />
      {TYPEWRITER.staticAfterward}
      <span>{TYPEWRITER.name}</span>
    </h1>
  );
};

export default Typewritter;
