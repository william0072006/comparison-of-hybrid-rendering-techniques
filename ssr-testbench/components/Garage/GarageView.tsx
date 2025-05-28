import dynamic from "next/dynamic";

const CarModel = dynamic(() => import("./components/CarModel"), { ssr: false });

export const GarageView = () => {
  return (
    <div className="flex flex-col items-center w-full" id="garage">
      <div className="flex flex-col items-center w-full pt-14">
        <h2 className="text-7xl font-bold">Garage</h2>
        <h3 className="text-2xl font-medium pl-0.5 mt-[-0.2rem]">
          See the SF-23 up close
        </h3>
      </div>
      <div className="flex justify-center items-center w-full max-w-[70%] h-[60vh] mt-12">
        <CarModel />
      </div>
      <p className="text-lg font-medium pl-0.5 mt-[-0.2rem]">
        Use cursor to move around. &quot;Scuderia Ferrari F1 SF23 2023&quot; 3D
        model by Redgrund is licensed under Creative Commons Attribution.
      </p>
    </div>
  );
};
