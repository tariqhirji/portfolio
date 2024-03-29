import Button from "@/components/Button";
import Socials from "@/components/Socials";
import SportsDynamic from "@/components/SportsDynamic";
import WeatherDynamic from "@/components/WeatherDynamic";
import { ABOUT, COMMUNICATOR, INNOVATIVE, TEAM_PLAYER } from "@/constants";
import TraitCard from "@/components/TraitCard";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="pt-16 flex justify-start pb-8 dark:bg-dark1">
      <div className="sectionContainer">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - About text and details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="sectionHeading">{ABOUT.title}</h1>
            <h3 className="mt-3 dark:text-secondary text-writing2">
              {ABOUT.description}
            </h3>
            <div className="flex gap-6 flex-col">
              <div className="flex w-full justify-center order-1">
                <Socials
                  variant="socialIcon_secondary"
                  shadowColor="shadow-gray"
                />
              </div>
            </div>
          </div>
          {/* Right Side - Weather + Sport Dynamics */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-32 justify-start">
            <div className="justify-center lg:inline-block">
              <Link href="../TariqHirji-Feb2024-Resume.pdf" target="_blank">
                <Button
                  isDisabled={false}
                  text="View my Resumé"
                  type="button"
                  fullWidth={true}
                />
              </Link>
            </div>
            <WeatherDynamic />
            {/* <SportsDynamic /> */}
          </div>
        </div>

        {/* row of Trait cards */}
        <div className="flex flex-col lg:flex-row py-6 gap-6">
          <div className="w-full lg:w-1/3">
            <TraitCard
              title={TEAM_PLAYER.title}
              description={TEAM_PLAYER.description}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <TraitCard
              title={INNOVATIVE.title}
              description={INNOVATIVE.description}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <TraitCard
              title={COMMUNICATOR.title}
              description={COMMUNICATOR.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
