import { hexToRgba } from "../../../utils";

type CarProps = {
  imageUrl: string;
  shadowColor?: string;
  name: string;
  team: string;
  engine: string;
};

export const Car = ({
  imageUrl,
  shadowColor = "#D22319",
  name,
  team,
  engine,
}: CarProps) => (
  <div className="flex flex-col items-center mt-13">
    <div
      className={`relative w-[20rem] h-[20rem] rounded-xl overflow-hidden`}
      style={{ boxShadow: `0 0 250px ${hexToRgba(shadowColor, 0.5)}` }}
    >
      <img
        src={imageUrl}
        alt={`Image of ${name} Formula 1 car`}
        sizes="20rem"
        style={{ objectFit: "cover", height: "100%" }}
      />
    </div>

    <div className="flex flex-col mt-8">
      <p className="font-bold text-4xl text-[#80978F] text-center">{name}</p>

      <div className="flex items-center space-x-2 mt-5">
        <span className="text-lg text-[#D12219] pl-3.5">Team</span>
        <span className="font-medium text-2xl text-[#91BFA3]">{team}</span>
      </div>

      <div className="flex items-center space-x-2 mt-2">
        <span className="text-lg text-[#D12219] pr-1">Engine</span>
        <span className="font-medium text-2xl text-[#91BFA3] max-w-[250px]">
          {engine}
        </span>
      </div>
    </div>
  </div>
);
