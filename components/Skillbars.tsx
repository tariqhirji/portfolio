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
    <div id="skillsbars" className="md:grid grid-cols-2 gap-6 mt-6 mb-12">
      <div className="card card_white col-span-2 lg:col-span-1">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold">
          {FRONTEND.title}
        </h2>
        <SkillBar
          colors={FRONTEND.colors}
          skills={FRONTEND.skills}
          barBackground={FRONTEND.barBackground}
        />
      </div>
      <div className="card card_white col-span-2 lg:col-span-1">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold">
          {BACKEND.title}
        </h2>
        <SkillBar
          colors={BACKEND.colors}
          skills={BACKEND.skills}
          barBackground={BACKEND.barBackground}
        />
      </div>
      <div className="card card_white col-span-2 lg:col-span-1">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold">
          {DESIGN_DEVOPS.title}
        </h2>
        <SkillBar
          colors={DESIGN_DEVOPS.colors}
          skills={DESIGN_DEVOPS.skills}
          barBackground={DESIGN_DEVOPS.barBackground}
        />
      </div>
      <div className="card card_white col-span-2 lg:col-span-1">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold">
          {DATA_SCIENCE.title}
        </h2>
        <SkillBar
          colors={DATA_SCIENCE.colors}
          skills={DATA_SCIENCE.skills}
          barBackground={DATA_SCIENCE.barBackground}
        />
      </div>
      <div className="card card_white col-span-2">
        <h2 className="text-center uppercase mt-2 mb-5 font-bold">
          {TEST_FRAMEWORKS.title}
        </h2>
        <SkillBar
          colors={TEST_FRAMEWORKS.colors}
          skills={TEST_FRAMEWORKS.skills}
          barBackground={TEST_FRAMEWORKS.barBackground}
        />
      </div>
    </div>
  );
};

export default Skillbars;
