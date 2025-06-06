import { getRaceSchedule } from "@/api/getRaceSchedule";
import { RaceScheduleView } from "./RaceScheduleView";
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

export const RaceScheduleWrapper = async () => {
  const initialRaces = await getRaceSchedule("now");

  return (
    <>
      <div className="hidden">{_.toString(topResults)}</div>
      <RaceScheduleView initialRaces={initialRaces} />
    </>
  );
};
