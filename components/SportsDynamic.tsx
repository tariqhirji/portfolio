"use client";
import { useEffect } from "react";
import axios from "axios";
const SportsDynamic = () => {
  const config = {
    headers: {
      "X-Auth-Token": `${process.env.NEXT_PUBLIC_SPORT}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://api.football-data.org/v4/competitions/2021/teams", config)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  });

  return (
    <div className="card card_secondary w-full flex items-center justify-center dark:text-secondary">
      <p className="font-bold text-2xl font-shareTech">My favourite team&apos;s next game:</p>
    </div>
  );
};

export default SportsDynamic;
