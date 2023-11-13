import {
  PROJECTS,
  DEEPFAKE,
  DEGREE_PLANNER,
  RASPBERRY_PONG,
} from "@/constants";
import React from "react";
import Tariq from "@/public/tariq.svg";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 flex justify-start">
      <div className="sectionContainer flex flex-col mb-4">
        <h1 className="sectionHeading">{PROJECTS.title}</h1>
        <h2 className="sectionSubheading">{PROJECTS.subtitle}</h2>

        <div className="md:grid md:grid-cols-12 gap-6 h-full">
          <ProjectCard
            title={DEEPFAKE.title}
            subtitle={DEEPFAKE.subtitle}
            badges={DEEPFAKE.badges}
            description={DEEPFAKE.description}
            isVertical={false}
            mediaType="video"
            mediaURL={DEEPFAKE.URL}
            status="inactive"
            buttonText={DEEPFAKE.buttonText}
          />
          <ProjectCard
            title={RASPBERRY_PONG.title}
            subtitle={RASPBERRY_PONG.subtitle}
            badges={RASPBERRY_PONG.badges}
            description={RASPBERRY_PONG.description}
            isVertical={true}
            mediaType="video"
            mediaURL={RASPBERRY_PONG.URL}
            status="inactive"
            buttonText={RASPBERRY_PONG.buttonText}
          />
          <ProjectCard
            title={DEGREE_PLANNER.title}
            subtitle={DEGREE_PLANNER.subtitle}
            badges={DEGREE_PLANNER.badges}
            description={DEGREE_PLANNER.description}
            isVertical={false}
            mediaType="image"
            mediaURL={DEGREE_PLANNER.URL}
            status="active"
            buttonText={DEGREE_PLANNER.buttonText}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
