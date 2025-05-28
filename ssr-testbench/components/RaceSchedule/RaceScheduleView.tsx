import { useEffect, useState } from "react";
import Image from "next/image";

import scheduleIcon from "@/public/icons/schedule-icon.svg";
import { Race } from "./components";
import { getRaceSchedule, RaceScheduleResponse } from "@/api/getRaceSchedule";

type Props = {
  initialRaces: RaceScheduleResponse;
};

export const RaceScheduleView = ({ initialRaces }: Props) => {
  const [time, setTime] = useState("");
  const [races, setRaces] = useState<RaceScheduleResponse>(initialRaces);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");

      const day = pad(now.getDate());
      const month = pad(now.getMonth() + 1); // months are 0-indexed
      const year = now.getFullYear();
      const hours = pad(now.getHours());
      const minutes = pad(now.getMinutes());
      const seconds = pad(now.getSeconds());

      setTime(`${day}-${month}-${year} ${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFetchRaces = async (time: string) => {
    try {
      const response = await getRaceSchedule(time);
      setRaces(response);
    } catch (error) {
      console.error("Error fetching race schedule:", error);
    }
  };

  const renderInfo = () => (
    <div className="flex flex-col items-center justify-center pr-20 py-10">
      <div>
        <h2 className="text-7xl font-bold text-[#80978F]">Schedule</h2>
        <h3 className="text-2xl font-medium text-start text-[#91BFA3] pl-0.5 mt-[-0.5rem]">
          Get yourself ready
        </h3>
        <h3 className="flex gap-1 text-lg font-medium text-start text-[#D12219] pl-0.5">
          <Image alt="Clock icon" src={scheduleIcon} />
          {time}
        </h3>
      </div>
      <button
        className="mt-6 px-12 py-2 bg-[#439361] text-[#1D0609] text-xl font-medium rounded-4xl cursor-pointer"
        onClick={() => handleFetchRaces("previous")}
      >
        Previous
      </button>
      <button
        className="mt-3 px-16 py-2 bg-[#439361] text-[#1D0609] text-xl font-medium rounded-4xl cursor-pointer"
        onClick={() => handleFetchRaces("next")}
      >
        Next
      </button>
    </div>
  );

  const renderSchedule = () => (
    <div className="flex flex-col justify-center items-center my-15">
      {races.map((race) => (
        <Race
          key={race.id}
          date={race.date}
          name={race.name}
          subtitle={race.subtitle}
        />
      ))}
    </div>
  );

  return (
    <div
      className="grid grid-cols-[70%_30%] w-full bg-[#1D0609] mt-10"
      id="race-schedule"
    >
      {renderSchedule()}
      {renderInfo()}
    </div>
  );
};
