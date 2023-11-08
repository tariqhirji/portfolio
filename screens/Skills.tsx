import React from "react";
import { SKILLS } from "@/constants";
import Skillbars from "@/components/Skillbars";

const Skills = () => {
  return (
    <section id="skills" className="pt-16 flex justify-start px-4 bg-[#E5E8F0]">
      <div className="w-full container mx-auto">
        <h1 className="uppercase pt-8 w-full">{SKILLS.title}</h1>
        <h2 className="pt-8">{SKILLS.subtitle}</h2>
        <Skillbars />
      </div>
    </section>
  );
};

export default Skills;
