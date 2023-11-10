import { PROJECTS, DEEPFAKE, DEGREE_PLANNER } from "@/constants";
import React from "react";
import Tariq from "@/public/tariq.svg";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 flex justify-start">
      <div className="sectionContainer flex flex-col mb-4">
        <h1 className="sectionHeading uppercase">{PROJECTS.title}</h1>
        <h2 className="sectionSubheading">{PROJECTS.subtitle}</h2>

        <div className="md:grid md:grid-cols-12 gap-6 h-full">
          <ProjectCard
            title={DEEPFAKE.title}
            subtitle={DEEPFAKE.subtitle}
            badges={DEEPFAKE.badges}
            description={DEEPFAKE.description}
          />
          <div className="col-span-4 row-span-2 card card_secondary">hello</div>
          <ProjectCard
            title={DEGREE_PLANNER.title}
            subtitle={DEGREE_PLANNER.subtitle}
            badges={DEGREE_PLANNER.badges}
            description={DEGREE_PLANNER.description}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
