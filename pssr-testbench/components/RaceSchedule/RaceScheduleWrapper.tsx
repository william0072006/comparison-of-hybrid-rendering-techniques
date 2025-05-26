import { getRaceSchedule } from "@/api/getRaceSchedule";
import { RaceScheduleView } from "./RaceScheduleView";

export const RaceScheduleWrapper = async () => {
  const initialRaces = await getRaceSchedule("now");

  return <RaceScheduleView initialRaces={initialRaces} />;
};
