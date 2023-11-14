import React from "react";
import { SKILLS } from "@/constants";
import Skillbars from "@/components/Skillbars";

const Skills = () => {
  return (
    <section id="skills" className="pt-16 flex justify-start bg-secondary">
      <div className="sectionContainer">
        <h1 className="sectionHeading">{SKILLS.title}</h1>
        <h2 className="sectionSubheading">{SKILLS.subtitle}</h2>
        <Skillbars />
      </div>
    </section>
  );
};

export default Skills;
