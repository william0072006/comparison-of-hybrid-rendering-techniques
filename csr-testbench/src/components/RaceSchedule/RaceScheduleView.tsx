import { useEffect, useState } from "react";

import { Race } from "./components";
import {
  getRaceSchedule,
  type RaceScheduleResponse,
} from "../../api/getRaceSchedule";

import _ from "lodash";

// This is an array of fake data to stress the rendering process.
const fakeData = Array.from({ length: 100000 }, (_, i) => ({
  id: i + 1,
  title: `Document #${i + 1}`,
  tags: ["tagA", "tagB", "tagC"],
  content: `Lorem ipsum dolor sit amet, item ${i + 1}`,
}));

const grouped = _.groupBy(fakeData, (item) => item.tags[0]);

const topResults = _(grouped)
  .values()
  .flatten()
  .orderBy("title", "desc")
  .slice(0, 500)
  .value();

export const RaceScheduleView = () => {
  const [time, setTime] = useState("");
  const [races, setRaces] = useState<RaceScheduleResponse>([]);

  useEffect(() => {
    void handleFetchRaces("now");
  }, []);

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
          <img alt="Clock icon" src="/icons/schedule-icon.svg" />
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
      <div className="hidden">{_.toString(topResults)}</div>
      {renderSchedule()}
      {renderInfo()}
    </div>
  );
};
