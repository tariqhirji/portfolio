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
    <h1 className="font-shareTech">
      {TYPEWRITER.staticForeward} 
      <br className="lg:hidden"/><span className="text-white">{text}</span> <Cursor cursorColor="white" />
      <br />
      {TYPEWRITER.staticAfterward}
      <span className="text-black">{TYPEWRITER.name}</span>
    </h1>
  );
};

export default Typewritter;
