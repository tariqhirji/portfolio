"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const WeatherDynamic = () => {
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_WEATHER!)
      .then((res) => {
        const { current } = res.data;
        setTemp(current.temp);
        setDesc(current.weather[0].description);
        setIcon(current.weather[0].icon);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card card_secondary w-full flex flex-col items-center text-center justify-center gap-4">
      <p className="font-bold text-2xl font-shareTech">
        The weather where I am currently:
      </p>
      <div className="flex gap-8">
        {!icon ? (
          "..."
        ) : (
          <Image
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weather"
            width={100}
            height={100}
          />
        )}
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-lg">{temp}&deg;C</p>
          <p className="italic font-light text-lg">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDynamic;
