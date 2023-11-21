"use client";
import {
  FRONTEND,
  BACKEND,
  DESIGN_DEVOPS,
  DATA_SCIENCE,
  TEST_FRAMEWORKS,
} from "@/constants";
import React from "react";
import SkillBar from "react-skillbars";

const Skillbars = () => {
  return (
    <div
      id="skillsbars"
      className="flex flex-col md:grid grid-cols-2 gap-6 mt-6 mb-12"
    >
      <div className="card card_white col-span-2">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold text-black dark:text-secondary">
          {FRONTEND.title}
        </h2>
        <SkillBar
          colors={FRONTEND.colors}
          skills={FRONTEND.skills}
          barBackground={FRONTEND.barBackground}
          animationDelay={500}
        />
      </div>
      <div className="card card_white col-span-2 lg:col-span-1 order-2 lg:order-1">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold text-black dark:text-secondary">
          {DESIGN_DEVOPS.title}
        </h2>
        <SkillBar
          colors={DESIGN_DEVOPS.colors}
          skills={DESIGN_DEVOPS.skills}
          barBackground={DESIGN_DEVOPS.barBackground}
          animationDelay={500}
        />
      </div>
      <div className="card card_white col-span-2 lg:col-span-1 order-1 lg:order-2">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold text-black dark:text-secondary">
          {BACKEND.title}
        </h2>
        <SkillBar
          colors={BACKEND.colors}
          skills={BACKEND.skills}
          barBackground={BACKEND.barBackground}
          animationDelay={500}
        />
      </div>

      <div className="card card_white col-span-2 lg:col-span-1 order-3">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold text-black dark:text-secondary">
          {DATA_SCIENCE.title}
        </h2>
        <SkillBar
          colors={DATA_SCIENCE.colors}
          skills={DATA_SCIENCE.skills}
          barBackground={DATA_SCIENCE.barBackground}
          animationDelay={500}
        />
      </div>
      <div className="card card_white col-span-2 lg:col-span-1 order-4">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold text-black dark:text-secondary">
          {TEST_FRAMEWORKS.title}
        </h2>
        <SkillBar
          colors={TEST_FRAMEWORKS.colors}
          skills={TEST_FRAMEWORKS.skills}
          barBackground={TEST_FRAMEWORKS.barBackground}
          animationDelay={500}
        />
      </div>
    </div>
  );
};

export default Skillbars;
