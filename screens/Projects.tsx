import { PROJECTS } from "@/constants";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 flex justify-start px-4">
      <div className="sectionContainer">
        <h1 className="sectionHeading uppercase">{PROJECTS.title}</h1>
        <h2 className="sectionSubheading">{PROJECTS.subtitle}</h2>

        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-7 card card_secondary">hello</div>
          <div className="col-span-5 row-span-2 card card_secondary">hello</div>
          <div className="col-span-7 card card_secondary">hello</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
