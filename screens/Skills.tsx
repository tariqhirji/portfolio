import React from "react";
import { SKILLS } from "@/constants";
import Skillbars from "@/components/Skillbars";

const Skills = () => {
  return (
    <section id="skills" className="pt-16 flex justify-start px-4 bg-secondary">
      <div className="sectionContainer">
        <h1 className="sectionHeading uppercase">{SKILLS.title}</h1>
        <h2 className="sectionSubheading">{SKILLS.subtitle}</h2>
        <Skillbars />
      </div>
    </section>
  );
};

export default Skills;
