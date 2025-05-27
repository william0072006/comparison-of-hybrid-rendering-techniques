import { API_URL } from "./config";

export type FeaturedCarsResponse = {
  id: number;
  imageUrl: string;
  shadowColor: string;
  name: string;
  team: string;
  engine: string;
}[];

export const getFeaturedCars = async (): Promise<FeaturedCarsResponse> => {
  const response = await fetch(`${API_URL}/cars`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch featured cars");
  }

  return response.json();
};
