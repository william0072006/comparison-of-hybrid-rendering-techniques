import { API_URL } from "@/api/config";

export type RaceScheduleResponse = {
  id: number;
  date: string;
  name: string;
  subtitle: string;
}[];

export const getRaceSchedule = async (
  time = "now",
): Promise<RaceScheduleResponse> => {
  const response = await fetch(`${API_URL}/schedule?time=${time}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch race schedule");
  }

  return response.json();
};
